import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { Wrapper } from "./Wrapper";
import Gallery from "./Gallery";

interface PhotoGalleryProps {
  images: string[];
  setShowGallery: Dispatch<SetStateAction<boolean>>;
  showGallery: boolean;
}

const PhotoGallery: FC<PhotoGalleryProps> = ({ images, showGallery, setShowGallery }) => {
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
      <Wrapper>
        <Gallery images={images}></Gallery>
      </Wrapper>
    </div>
  );
};
export default PhotoGallery;
