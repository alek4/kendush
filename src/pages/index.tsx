import CategoryGrid from "@/components/CategoryGrid";
import NavBar from "@/components/NavBar";
import PhotoGallery from "@/components/PhotoGallery";
import VideoGallery from "@/components/VideoGallery";
import { Wrapper } from "@/components/Wrapper";
import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { client } from "../../sanity/lib/client";

export default function Home({ video_categories, image_categories }: any) {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedVideoCategory, setSelectedVideoCategory] = useState<string>();

  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const isInitialRender = useRef(-1);

  useEffect(() => {
    if (!selectedCategory) {
      return;
    }

    const query_image = 
      `*[_type == "gallery_image" && category->name == "${selectedCategory}"]{name, "category_name": category->name, image}`;
    client.fetch(query_image).then((res) => {
      setImages(res);
    });
  }, [selectedCategory]);

  useEffect(() => {
    if (!selectedVideoCategory) {
      return;
    }

    const query_video = 
      `*[_type == "video" && category->name == "${selectedVideoCategory}"]{name, "category_name": category->name, "fileURL": video.asset->url}`;
    client.fetch(query_video).then((res) => {
      setVideos(res);
    });
  }, [selectedVideoCategory]);

  return (
    <>
      <div
        id="home"
        className={`h-screen bg-[url(/images/image1.webp)] bg-center bg-cover pt-24 relative`}
      >
        <Wrapper className="">
          <div className="absolute bottom-40">
            <h1 className="uppercase text-blue-600 font-bold text-6xl">
              k per l&apos;asso.
            </h1>
            <h3 className="uppercase text-red-500 font-bold text-3xl">
              get yourself a piece of kendu
            </h3>
          </div>
        </Wrapper>
      </div>
      <div id="about-us" className="bg-[#f2f0ed] pt-24 pb-24">
        <Wrapper className="flex flex-col justify-center items-center">
          <h2 className="uppercase text-yellow-400 font-bold text-5xl mb-5">
            chi siamo
          </h2>
          <p className="max-w-xl text-zinc-900 text-xl text-center">
            2 Kendu è un nome, un brand ma non solo questo. Da dove arriva lo
            sappiamo: dall&apos;amore viscerale per l&apos;hip hop e da tutto
            ciò che lo circonda. Dove ci porterà lo scopriremo insieme a voi.
          </p>
        </Wrapper>
      </div>
      <div id="gallery" className="pt-24 pb-24">
        <Wrapper className="flex flex-col justify-center items-center">
          <h2 className="uppercase text-yellow-400 font-bold text-5xl mb-16">
            Galleria
          </h2>

          <h4 className="mb-8 uppercase text-gray-400 font-bold text-3xl">
            Foto
          </h4>
          <CategoryGrid
            categories={image_categories}
            onCategoryClick={setSelectedCategory}
          ></CategoryGrid>

          {selectedCategory ? (
            <PhotoGallery
              images={images.filter(
                (img: any) => img.category_name === selectedCategory
              )}
              currentCategory={selectedCategory}
              categories={image_categories.map((img: any) => img.name)}
              setSelectedCategory={setSelectedCategory}
            />
          ) : null}

          <h4 className="mb-8 mt-16 uppercase text-gray-400 font-bold text-3xl">
            Video
          </h4>

          <CategoryGrid
            categories={video_categories}
            onCategoryClick={setSelectedVideoCategory}
          ></CategoryGrid>

          {selectedVideoCategory ? (
            <VideoGallery
              videos={videos.filter(
                (video: any) => video.category_name === selectedVideoCategory
              )}
              currentCategory={selectedVideoCategory}
              categories={video_categories.map((thumb: any) => thumb.name)}
              setSelectedCategory={setSelectedVideoCategory}
            />
          ) : null}
        </Wrapper>
      </div>
      <div id="cta" className="bg-[#f2f0ed] pt-24 pb-24">
        <Wrapper className="flex flex-col justify-center items-center">
          <NextLink
            href="/collections"
            className="flex items-center group uppercase text-yellow-400 font-bold text-4xl md:text-5xl text-center"
          >
            Fai un salto nel nostro shop!
            <span className="hidden  md:group-hover:block ml-5 text-4xl">
              <FaChevronRight></FaChevronRight>
            </span>
          </NextLink>
        </Wrapper>
      </div>
      <div id="contact" className="md:h-screen pt-24 pb-24 bg-zinc-500">
        <Wrapper className="flex flex-col justify-between gap-20 lg:flex-row">
          <div className="uppercase font-bold text-4xl md:text-6xl text-white">
            <h1>fatti sentire.</h1>
            <h1>contattaci!</h1>
          </div>
          <div className="text-white">
            <h5 className="text-xl font-bold mb-3">
              Puoi connetterti con noi attraverso i seguenti canali:
            </h5>
            <ul className="text-lg uppercase">
              <li>
                <NextLink href={""}>email</NextLink>
              </li>
              <li>
                <NextLink href={""}>instagram</NextLink>
              </li>
              <li>
                <NextLink href={""}>facebook</NextLink>
              </li>
              <li>
                <NextLink href={""}>youtube</NextLink>
              </li>
            </ul>
          </div>
        </Wrapper>
      </div>
      <NavBar isHomePage={true}></NavBar>
    </>
  );
}

export const getServerSideProps = async () => {
  // const query_video =
  //   '*[_type == "video"]{name, "category_name": category->name, "fileURL": video.asset->url}';
  // const videos = await client.fetch(query_video);
  const query_video_cat = '*[_type == "video_category"]';
  const video_categories = await client.fetch(query_video_cat);

  // const query_image =
  //   '*[_type == "gallery_image"]{name, "category_name": category->name, image}';
  // const images = await client.fetch(query_image);
  const query_image_cat = '*[_type == "image_category"]';
  const image_categories = await client.fetch(query_image_cat);

  return {
    props: { video_categories, image_categories },
  };
};
