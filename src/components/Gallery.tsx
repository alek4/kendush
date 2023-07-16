import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

type Props = {
  images: string[];
  className?: string;
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

export default function Gallery({
  images,
  className,
  autoSlide = false,
  autoSlideInterval = 1000,
}: Props) {
  const gridSize = 8;
  const [groupImages, setGroupImages] = useState<string[][]>([]);

  useEffect(() => {
    for (let i = 0; i < images.length; i += gridSize) {
      // console.log(i, images.slice(i, i + 6));

      setGroupImages((prevGroups) => [
        ...prevGroups,
        images.slice(i, i + gridSize),
      ]);
    }
  }, [images]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrentIndex((curr) => (curr === 0 ? groupImages.length - 1 : curr - 1));

  const nextSlide = () =>
    setCurrentIndex((curr) => (curr === groupImages.length - 1 ? 0 : curr + 1));

  return (
    <div className={`w-full relative overflow-hidden group ${className}`}>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {groupImages.map((group, indexg) => (
          <div
            key={indexg}
            className={`w-full grid grid-cols-${
              gridSize / 2
            } grid-rows-2 flex-shrink-0`}
          >
            {group.map((image, index) => (
              <Image
                key={index}
                className="duration-500 aspect-square object-cover"
                src={image}
                width={0}
                height={0}
                sizes="100wh"
                style={{ width: "100%", height: "auto" }} // optional
                alt={`img-${index + 1}`}
              />
            ))}
          </div>
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
