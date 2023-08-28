import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Wrapper } from "./Wrapper";
import Carousel from "./Carousel";
import { IoMdClose } from "react-icons/io";
import { CategoryImagesType } from "@/utils/CategoryImagesType";
import Image from "next/image";

interface PhotoGalleryProps {
  images: string[] | undefined;
  setSelectedCategory: Dispatch<SetStateAction<string | undefined>>;
  otherCategories: CategoryImagesType[] | undefined;
}

const PhotoGallery: FC<PhotoGalleryProps> = ({
  images,
  otherCategories,
  setSelectedCategory,
}) => {
  return images ? (
    <div
      className={`fixed w-screen h-screen top-0 left-0 z-10 bg-[rgba(0,0,0,0.9)] flex items-center`}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          setSelectedCategory(undefined);
        }
      }}
    >
      <Wrapper className="relative flex flex-col gap-5">
        <div className="w-full mx-auto relative">
          <Carousel images={images} />

          <div
            onClick={() => setSelectedCategory(undefined)}
            className="absolute top-5 left-5 p-3 text-2xl text-white bg-black/20 rounded-full cursor-pointer"
          >
            <IoMdClose></IoMdClose>
          </div>
        </div>

        <div className="hidden absolute -bottom-5 right-1/2 -translate-x-[-50%]  lg:flex flex-row w-2/3 gap-5">
          {otherCategories?.map((category, i: number) => (
            <div
              onClick={() => {
                setSelectedCategory(category.name);
              }}
            >
              <BlurImage
                key={i}
                image={category.images[0]}
                title={category.name}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  ) : null;
};
export default PhotoGallery;

type BlurImageProps = {
  image: string;
  title: string;
};

function BlurImage({ image, title }: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="relative group cursor-pointer">
      <Image
        src={image}
        alt=""
        width={0}
        height={0}
        sizes="100wh"
        className={`group-hover:opacity-75 aspect-1 object-cover ${
          isLoading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 blur-0 scale-100"
        }`}
        style={{ width: "100%", height: "auto" }} // optional
        onLoadingComplete={() => setIsLoading(false)}
      ></Image>
      <h5 className="absolute bottom-5 left-5 text-2xl font-bold text-gray-100 capitalize">
        {title}
      </h5>
    </div>
  );
}
