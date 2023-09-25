import { Dispatch, FC, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import CarouselVideo from "./CarouselVideo";
import { Wrapper } from "./Wrapper";

interface PhotoGalleryProps {
  videos: string[] | undefined;
  setSelectedCategory: Dispatch<SetStateAction<string | undefined>>;
  currentCategory: string;
  categories: string[] | undefined;
}

const PhotoGallery: FC<PhotoGalleryProps> = ({
  videos,
  categories,
  currentCategory,
  setSelectedCategory,
}) => {
  return videos ? (
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
          <CarouselVideo videos={videos} />

          <div
            onClick={() => setSelectedCategory(undefined)}
            className="absolute top-5 left-5 p-3 text-2xl text-white bg-black/20 rounded-full cursor-pointer"
          >
            <IoMdClose></IoMdClose>
          </div>
        </div>

        <div className="hidden absolute bottom-12 left-1/2 -translate-x-1/2 lg:flex flex-row gap-5">
          {categories?.map((category, i: number) => (
            <div
              key={i}
              className={`flex items-center rounded-xl py-3 px-5  ${
                currentCategory === category ? "bg-white" : "bg-white/50 "
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
