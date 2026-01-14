"use client";

import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
  swiperRef: any;
  setIsBeginning: (isBeginning: boolean) => void;
  setIsEnd: (isEnd: boolean) => void;
  slidePerView: number;
  direction?: "horizontal" | "vertical";
  modules?: any[];
};

export const Carousel = ({
  children,
  swiperRef,
  setIsBeginning,
  setIsEnd,
  slidePerView,
  modules,
  direction = "horizontal",

}: props) => {
  return (
    <Swiper
      modules={modules ? modules : [Navigation, Pagination]}
      slidesPerView={slidePerView}
      spaceBetween={20}
      className="h-full"
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={(swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      direction={direction}
    >
      {children}
    </Swiper>
  );
};
