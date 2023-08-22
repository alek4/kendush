import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

interface PhotoCategoriesProps {
  thumbnails: string[];
  galleryToggles: Dispatch<SetStateAction<boolean>>[];
  categoryTitles: string[];
}

const PhotoCategories: FC<PhotoCategoriesProps> = ({
  thumbnails,
  galleryToggles,
  categoryTitles,
}) => {
  return (
    <div className="w-full grid grid-cols-4 grid-rows-2 flex-shrink-0">
      {galleryToggles.map((_, i) => (
        <div className="relative">
          <div
            className="group cursor-pointer"
            onClick={() => {
              galleryToggles[i](true);
            }}
          >
            <Image
              src={thumbnails[i]}
              alt="photo"
              className="aspect-square object-cover"
              width={0}
              height={0}
              sizes="100wh"
              style={{ width: "100%", height: "auto" }} // optional
            ></Image>
            <h5 className="absolute bottom-5 left-5 text-2xl font-bold text-gray-100">
              {categoryTitles[i]}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PhotoCategories;
