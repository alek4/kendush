import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";

type Props = {
  className?: string;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  children: any;
};

export default function CarouselAdapter({
  className,
  autoSlide = false,
  autoSlideInterval = 1000,
  children,
}: Props) {
  return (
    <Carousel
      className="group"
      autoPlay={autoSlide}
      showIndicators={false}
      infiniteLoop
      renderItem={(item: any, props) => <item.type {...item.props} {...props} />}
      renderArrowNext={(
        clickHandler: () => void,
        hasNext: boolean,
        label: string
      ) => (
        <div
          onClick={clickHandler}
          className="group-hover:block hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer"
        >
          <FaChevronRight />
        </div>
      )}
      renderArrowPrev={(
        clickHandler: () => void,
        hasNext: boolean,
        label: string
      ) => (
        <div
          onClick={clickHandler}
          className="group-hover:block hidden absolute z-50 top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer"
        >
          <FaChevronLeft />
        </div>
      )}
    >
      {...children}
    </Carousel>
  );
}
