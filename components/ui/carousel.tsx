"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductClothes } from "@/types/product";

type props = {
  items: ProductClothes[];
  swiperRef: any;
  setIsBeginning: (isBeginning: boolean) => void;
  setIsEnd: (isEnd: boolean) => void;
  slidePerView: number
};

export const Carousel = ({
  items,
  swiperRef,
  setIsBeginning,
  setIsEnd,
  slidePerView
}: props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={slidePerView}
      spaceBetween={10}
      className="h-full"
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={(swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
    >
      {[1, 2, 3, 4].map((i) => (
        <SwiperSlide key={i}>
          <div className="h-94 max-sm:h-43.25 flex items-center justify-center bg-gray-300 text-xl font-bold">
            Slide {i}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
