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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "node_modules/video-react/dist/video-react.css";

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

    const query_image = `*[_type == "gallery_image" && category->name == "${selectedCategory}"]{name, "category_name": category->name, image}`;
    client.fetch(query_image).then((res) => {
      setImages(res);
    });
  }, [selectedCategory]);

  // useEffect(() => {
  //   if (!selectedVideoCategory) {
  //     return;
  //   }

  //   const query_video = `*[_type == "video" && category->name == "${selectedVideoCategory}"]{name, "category_name": category->name, "fileURL": video.asset->url}`;
  //   client.fetch(query_video).then((res) => {
  //     setVideos(res);
  //   });
  // }, [selectedVideoCategory]);

  return (
    <>
      <div
        id="home"
        className={`h-screen bg-[url(https://cdn.sanity.io/images/6rsophlq/production/52e84247bd8cca6c51950c0d65ed1d9cc1a57180-6000x4000.jpg)] bg-center bg-cover pt-24 relative`}
      >
        <Wrapper className="">
          <div className="absolute bottom-40">
            <h1 className="uppercase text-gray-100 font-bold text-5xl md:text-6xl">
              k per l&apos;asso.
            </h1>
            <h3 className="uppercase text-yellow-400 font-bold text-2xl md:text-3xl">
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
          <div className="flex flex-col justify-start">
            <p className="max-w-xl text-zinc-900 text-xl text-left">
              Kendu è un viaggio indimenticabile sui binari della creatività.
            </p>
            <p className="max-w-xl text-zinc-900 text-xl text-left">
              Creiamo e gestiamo contenuti per i canali social, feste, matrimoni,
              branding... esplorando ed esaudendo ogni vostra singola esigenza.
            </p>
            <p className="max-w-xl text-zinc-900 text-xl text-left">
              Da qualche anno abbiamo deciso di aprire uno shop-online.
            </p>
            <p className="max-w-xl text-zinc-900 text-xl text-left">
              K è il marchio.
            </p>
            <p className="max-w-xl text-zinc-900 text-xl text-left">
              &quot;K per l&apos;asso&quot;, perchè crediamo che ognuno di voi ha
              qualità eccezionali, unica nel suo genere.
            </p>
          </div>
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
                <NextLink href={"mailto:bolankenduyvon@gmail.com"}>
                  email
                </NextLink>
              </li>
              <li>
                <NextLink href={"https://www.instagram.com/kendu_official/"}>
                  instagram
                </NextLink>
              </li>
              <li>
                <NextLink href={"https://www.facebook.com/yvon.bolankendu.3/"}>
                  facebook
                </NextLink>
              </li>
              <li>
                <NextLink
                  href={
                    "https://www.youtube.com/channel/UCHqg3Se8c_s9s_f6s9eHzlw?view_as=subscriber"
                  }
                >
                  youtube
                </NextLink>
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
