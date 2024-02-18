import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPlayer from "react-player/lazy";

type Props = {
  videos: string[];
  className?: string;
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

export default function Carousel({
  videos,
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

  const prevSlide = () =>
    setCurrentIndex((curr) => (curr === 0 ? videos.length - 1 : curr - 1));

  const nextSlide = () =>
    setCurrentIndex((curr) => (curr === videos.length - 1 ? 0 : curr + 1));

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {videos.map((vid, index) => (
          <div key={index} className="shrink-0 basis-full">
            <ReactPlayer url={vid} key={index} width={"100%"} height={"auto"} lazy controls loop />
          </div>
        ))}
      </div>

      <div
        onClick={prevSlide}
        className="hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer"
      >
        <FaChevronLeft />
      </div>
      <div
        onClick={nextSlide}
        className="hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer"
      >
        <FaChevronRight />
      </div>
    </div>
  );
}
