"use client";

import { DATA_FAVORITES } from "@/app/mock/favouries.mock";
import { DATA_CLOTHES_MOCK } from "@/app/mock/products.mock";
import { ProductItem } from "@/components/product/product-list";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoClose,
} from "react-icons/io5";
import { SwiperSlide } from "swiper/react";

export const ListFavouriesItem = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { isMobile } = useIsMobile();
  return (
    <div>
      <div className="grid grid-cols-2 max-sm:grid-cols-2 gap-5">
        {DATA_FAVORITES.map((item) => (
          <div key={item.id} className="flex gap-5 max-md:gap-3">
            <div className="w-70">
              <ProductItem item={item} />
            </div>
            <div className="flex flex-col">
              <Button icon={<IoClose />} />
            </div>
          </div>
        ))}
      </div>
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
