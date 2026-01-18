"use client";

import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { ArrowLongIcon } from "@/icon";
import Link from "next/link";
import { useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { DATA_CLOTHES_MOCK } from "./mock/products.mock";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const HeroCarousel = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  return (
    <div className="pt-10 xl:flex gap-2 max-xl:relative">
      <div className="w-[35%] max-lg:w-full xl:h-110 xl:relative py-1">
        <h1 className="font-beatrice-deck uppercase text-5xl/10 max-sm:text-4xl/10 font-extrabold">
          New
          <br />
          Collections
        </h1>
        <p className="font-beatrice-deck font-extralight text-base/tight mt-5">
          Summer
          <br />
          2024
        </p>
        <div className="absolute bottom-1 max-xl:-bottom-15 left-0 right-0 xl:flex max-xl:grid max-xl:grid-cols-2 max-xl:gap-7 max-xl:ps-1 xl:gap-10">
          <Link
            href={"/shop"}
            className="font-beatrice-deck font-extralight bg-brand-gray-light p-3 flex items-center gap-2 justify-between xl:flex-1"
          >
            <span className="max-sm:text-[12px]">Go To Shop</span>
            <ArrowLongIcon />
          </Link>
          <div className="flex gap-2 max-xl:hidden">
            <Button
              onClick={() => swiperRef.current?.slidePrev()}
              variant="outline"
              size="md"
              className="h-full w-15 justify-center"
              icon={<IoChevronBackOutline />}
              disabled={isBeginning}
            />
            <Button
              onClick={() => swiperRef.current?.slideNext()}
              variant="outline"
              className="h-full w-15 justify-center"
              size="md"
              icon={<IoChevronForwardOutline />}
              disabled={isEnd}
            />
          </div>
        </div>
      </div>
      <div className="w-[65%] max-lg:w-full xl:h-110 relative max-lg:mt-10">
        <Carousel
          slidePerView={2}
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
    </div>
  );
};

export default HeroCarousel;
