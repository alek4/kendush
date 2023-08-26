import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { Wrapper } from "./Wrapper";
import Gallery from "./Gallery";

interface PhotoGalleryProps {
  images: string[];
  setShowGallery: Dispatch<SetStateAction<boolean>>;
  showGallery: boolean;
}

const PhotoGallery: FC<PhotoGalleryProps> = ({
  images,
  showGallery,
  setShowGallery,
}) => {
  return (
    <div
      className={`${
        showGallery ? "fixed" : "hidden"
      } w-screen h-screen top-0 left-0 z-10 bg-[rgba(0,0,0,0.9)] flex items-center`}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          setShowGallery(false);
        }
      }}
    >
      <Wrapper className="flex flex-col gap-5">
        <Gallery images={images}></Gallery>
        <div className="relative">
          <div
            className="group cursor-pointer"
            onClick={() => {
              setShowGallery(true);
            }}
          >
            <Image
              src={images[0]}
              alt="photo"
              className="aspect-square object-cover"
              width={110}
              height={110}
            ></Image>
            <h5 className="absolute bottom-5 left-5 text-2xl font-bold text-gray-100">
              asd
            </h5>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default PhotoGallery;
