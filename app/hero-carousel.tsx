"use client";

import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { ArrowLongIcon } from "@/icon";
import Link from "next/link";
import { useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const HeroCarousel = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  return (
    <div className="pt-20 xl:flex gap-2 max-xl:relative">
      <div className="w-[35%] max-lg:w-full xl:h-94 xl:relative">
        <h1 className="font-beatrice-deck uppercase text-5xl/10 font-extrabold">
          New
          <br />
          Collections
        </h1>
        <p className="font-beatrice-deck font-extralight text-base/tight mt-5">
          Summer
          <br />
          2024
        </p>
        <div className="absolute bottom-0 max-xl:-bottom-15 left-0 right-0 xl:flex max-xl:grid max-xl:grid-cols-2 max-xl:gap-2 xl:gap-10">
          <Link
            href={""}
            className="font-beatrice-deck font-extralight bg-brand-gray-light p-3 flex items-center gap-2 justify-between xl:flex-1"
          >
            <span className="max-sm:text-[14px]">Go To Shop</span>
            <ArrowLongIcon />
          </Link>
          <div className="flex gap-2 max-xl:hidden">
            <Button
              onClick={() => swiperRef.current?.slidePrev()}
              variant="outline"
              size="md"
              className="prev h-full"
              icon={<IoChevronBackOutline />}
              disabled={isBeginning}
            />
            <Button
              onClick={() => swiperRef.current?.slideNext()}
              variant="outline"
              className="next h-full"
              size="md"
              icon={<IoChevronForwardOutline />}
              disabled={isEnd}
            />
          </div>
        </div>
      </div>
      <div className="w-[65%] max-lg:w-full xl:h-94 relative max-lg:mt-10">
        <Carousel
          slidePerView={2}
          setIsBeginning={setIsBeginning}
          setIsEnd={setIsEnd}
          swiperRef={swiperRef}
          items={[]}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
