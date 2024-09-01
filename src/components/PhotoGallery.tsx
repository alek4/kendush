import Image from "next/image";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { IoMdClose } from "react-icons/io";
// import Carousel from "./Carousel";
import { Wrapper } from "./Wrapper";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineSwipe  } from "react-icons/md";
import CarouselAdapter from "./CarouselAdapter";
import { urlForImage } from "../../sanity/lib/image";

import Slider from "react-slick";

interface PhotoGalleryProps {
  images: any[] | undefined;
  setSelectedCategory: Dispatch<SetStateAction<string | undefined>>;
  currentCategory: string;
  categories: string[] | undefined;
}

const PhotoGallery: FC<PhotoGalleryProps> = ({
  images,
  categories,
  currentCategory,
  setSelectedCategory,
}) => {
  const NextArrow: React.FC = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className="md:group-hover:block hidden absolute top-[50%] -translate-x-0 translate-y-[-50%] right-20 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer"
      >
        <FaChevronRight />
      </div>
    );
  };

  const PrevArrow: React.FC = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={` md:group-hover:block hidden absolute z-50 top-[50%] -translate-x-0 translate-y-[-50%] left-20 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer`}
      >
        <FaChevronLeft />
      </div>
    );
  };

  return images ? (
    <div
      className={`fixed w-screen h-screen top-0 left-0 z-10 bg-[rgba(0,0,0,0.9)] flex items-center`}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          setSelectedCategory(undefined);
        }
      }}
    >
      <div
        onClick={() => setSelectedCategory(undefined)}
        className="block absolute top-5 left-5 p-3 text-2xl text-white bg-black/20 rounded-full cursor-pointer"
      >
        <IoMdClose></IoMdClose>
      </div>
      <Wrapper className="w-screen md:w-10/12 relative flex flex-col gap-5">
        <div className="w-full mx-auto relative">
          <Slider
            className="group"
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            adaptiveHeight={true}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {images.map((img, index) => (
              <div key={index} className="relative h-[80vh]">
                <Image
                  className={`object-contain`}
                  src={urlForImage(img.image)}
                  fill
                  sizes={"100wh"}
                  alt={`img-${index + 1}`}
                />
              </div>
            ))}
          </Slider>
          <MdOutlineSwipe  className="md:hidden absolute bottom-32 left-[50%] -translate-x-[50%] text-white text-3xl" />
        </div>

        <div className="hidden absolute bottom-5 left-1/2 -translate-x-1/2 lg:flex flex-row gap-5">
          {categories?.map((category, i: number) => (
            <div
              key={i}
              className={`flex items-center rounded-xl py-3 px-5  ${
                currentCategory === category
                  ? "bg-white"
                  : "bg-white/50 "
              } border-2 border-white cursor-pointer`}
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              <p className="capitalize text-lg">{category}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  ) : null;
};
export default PhotoGallery;
