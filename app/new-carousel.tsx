"use client";

import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import useIsMobile from "@/hooks/useIsMobile";
import { useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { DATA_CLOTHES_MOCK } from "./mock/products.mock";
import { SwiperSlide } from "swiper/react";
import { ProductItem } from "@/components/product/product-list";
import { ProductClothes } from "@/types/product.type";

const NewCarousel = ({data}:{data: ProductClothes[]}) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const { isMobile } = useIsMobile();

  return (
    <>
      <Carousel
        slidePerView={isMobile ? 2 : 4}
        swiperRef={swiperRef}
        setIsBeginning={setIsBeginning}
        setIsEnd={setIsEnd}
      >
       {data.map(item => (
        <SwiperSlide key={item.id} className="p-1">
            <ProductItem item={item}/>
        </SwiperSlide>
       ))}
      </Carousel>

      <div className="flex justify-center gap-2 max-xl:hidden mt-5">
        <Button
          onClick={() => swiperRef.current?.slidePrev()}
          variant="outline"
          size="ic"
          className="prev h-full"
          icon={<IoChevronBackOutline />}
          disabled={isBeginning}
        />
        <Button
          onClick={() => swiperRef.current?.slideNext()}
          variant="outline"
          className="next h-full"
          size="ic"
          icon={<IoChevronForwardOutline />}
          disabled={isEnd}
        />
      </div>
    </>
  );
};

export default NewCarousel;
