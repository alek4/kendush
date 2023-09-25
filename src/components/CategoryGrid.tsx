import { Dispatch, FC, SetStateAction, useState } from "react";
import Image from "next/image";
import { CategoryImagesType } from "@/utils/CategoryImagesType";

interface CategoryGridProps {
  categories: CategoryImagesType[];
  onCategoryClick: Dispatch<SetStateAction<string | undefined>>;
}

const CategoryGrid: FC<CategoryGridProps> = ({
  categories,
  onCategoryClick,
}) => {
  return (
    <div className="w-full grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-shrink-0">
      {categories.map((category, i: number) => (
        <div
          onClick={() => {
            onCategoryClick(category.name);
          }}
          key={i}
        >
          <BlurImage key={i} image={category.images[0]} title={category.name} />
        </div>
      ))}
    </div>
  );
};
export default CategoryGrid;

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
