"use client";

import { DATA_CLOTHES_MOCK } from "@/app/mock/products.mock";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import useFavourite from "@/hooks/useFavourite";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoClose,
} from "react-icons/io5";
import { SwiperSlide } from "swiper/react";

export const ListFavouriesItem = () => {
  const swiperRef = useRef<any>(null);
  const { items, handleRemoveFavourite } = useFavourite();
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { isMobile } = useIsMobile();

  return (
    <div>
      <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-5">
        {items.map((item) => (
          <Link
            key={item.productId}
            href={`/shop/${item.slug}?product_id=${item.productId}`}
            className="relative"
          >
            <div className="aspect-3/4 relative w-full ring ring-gray-300">
              <Image src={item.thumnail} fill alt={item.name} />
            </div>
            <div className="absolute right-0 top-0">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleRemoveFavourite(item.productId);
                }}
                icon={<IoClose />}
              />
            </div>
          </Link>
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center py-20">
          Your favourite is currently empty.
        </div>
      )}
      <Separator classname="my-4 border-gray-300" />
      <div className="xl:absolute xl:top-30 xl:right-20 xl:w-80 xl:p-5 xl:ring xl:ring-gray-300 max-xl:mt-10">
        <h5 className="my-3 text-center">You might like</h5>
        <div className="xl:h-70">
          <Carousel
            slidePerView={isMobile ? 2 : 1}
            setIsBeginning={setIsBeginning}
            setIsEnd={setIsEnd}
            swiperRef={swiperRef}
          >
            {DATA_CLOTHES_MOCK.map((item) => (
              <SwiperSlide key={item.id} className="p-1">
                <div className="ring ring-gray-300 w-full h-full max-xl:aspect-3/4">
                  <div className="w-full h-full relative">
                    <Image
                      src={item.variants[0].image[0].url}
                      alt={item.variants[0].image[0].alt!}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
        <div className="flex justify-center gap-2 mt-3 max-xl:hidden">
          <Button
            variant="outline"
            disabled={isBeginning}
            icon={<IoChevronBackOutline />}
            onClick={() => swiperRef.current.slidePrev()}
          />
          <Button
            variant="outline"
            disabled={isEnd}
            icon={<IoChevronForwardOutline />}
            onClick={() => swiperRef.current.slideNext()}
          />
        </div>
      </div>
    </div>
  );
};
