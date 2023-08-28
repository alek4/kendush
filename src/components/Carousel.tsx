import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

type Props = {
  images: string[];
  className?: string;
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

export default function Carousel({
  images,
  className,
  autoSlide = false,
  autoSlideInterval = 1000,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const prevSlide = () =>
    setCurrentIndex((curr) => (curr === 0 ? images.length - 1 : curr - 1));

  const nextSlide = () =>
    setCurrentIndex((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <Image
            key={index}
            className={`duration-500 ${
              isLoading
                ? "grayscale blur-2xl"
                : "grayscale-0 blur-0"
            }`}
            onLoadingComplete={() => setIsLoading(false)}
            src={img}
            width={1920}
            height={1080}
            alt={`img-${index + 1}`}
          />
        ))}
      </div>

      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer"
      >
        <FaChevronLeft />
      </div>
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer"
      >
        <FaChevronRight />
      </div>
    </div>
  );
}
