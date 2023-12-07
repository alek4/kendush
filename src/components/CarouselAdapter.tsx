import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";

type Props = {
  images: string[];
  className?: string;
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

export default function CarouselAdapter({
  images,
  className,
  autoSlide = false,
  autoSlideInterval = 1000,
}: Props) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Carousel
      className="bg-red-600"
      autoPlay={autoSlide}
      showIndicators={false}
      infiniteLoop
      renderArrowNext={(
        clickHandler: () => void,
        hasNext: boolean,
        label: string
      ) => (
        <div
          onClick={clickHandler}
          className="block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer"
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
          className="block absolute z-50 top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer"
        >
          <FaChevronLeft />
        </div>
      )}
    >
      {images.map((img, index) => (
        <div>
          <Image
            key={index}
            className={`duration-500 ${
              isLoading ? "grayscale blur-2xl" : "grayscale-0 blur-0"
            }`}
            onLoadingComplete={() => setIsLoading(false)}
            src={img}
            width={1920}
            height={1080}
            alt={`img-${index + 1}`}
          />
        </div>
      ))}
    </Carousel>
  );
}
