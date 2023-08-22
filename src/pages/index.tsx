import NavBar from "@/components/NavBar";
import { Wrapper } from "@/components/Wrapper";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Gallery from "@/components/Gallery";

export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    setImages([
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
      `https://picsum.photos/1920/1080/?random&t=${new Date().getTime()}`,
    ]);
  }, []);

  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <div
        id="home"
        className={`md:h-screen bg-[url(/images/image1.webp)] bg-center bg-cover pt-24 relative`}
      >
        <Wrapper className="">
          <div className="absolute bottom-40">
            <h1 className="uppercase text-blue-600 font-bold text-6xl">
              k per l'asso.
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
          <p className="max-w-xl text-zinc-900 text-xl">
            Kendu è un nome, un brand ma non solo questo. Da dove arriva lo
            sappiamo: dall'amore viscerale per l'hip hop e da tutto ciò che lo
            circonda. Dove ci porterà lo scopriremo insieme a voi.
          </p>
        </Wrapper>
      </div>
      <div id="gallery" className="pt-24 pb-24">
        <Wrapper className="flex flex-col justify-center items-center">
          <h2 className="uppercase text-yellow-400 font-bold text-5xl mb-16">
            Galleria
          </h2>
          <div className="w-full grid grid-cols-4 grid-rows-2 flex-shrink-0">
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
                  width={0}
                  height={0}
                  sizes="100wh"
                  style={{ width: "100%", height: "auto" }} // optional
                ></Image>
                <h5 className="absolute bottom-5 left-5 text-2xl font-bold">
                  Compleanni
                </h5>
              </div>
            </div>
          </div>

          <div
            id="fullPageGallery"
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
        </Wrapper>
      </div>
      <div id="cta" className="bg-[#f2f0ed] pt-24 pb-24">
        <Wrapper className="flex flex-col justify-center items-center">
          <NextLink
            href="/collections"
            className="flex items-center group uppercase text-yellow-400 font-bold text-5xl"
          >
            Fai un salto nel nostro shop!
            <span className="hidden group-hover:block ml-5 text-4xl">
              <FaChevronRight></FaChevronRight>
            </span>
          </NextLink>
        </Wrapper>
      </div>
      <div id="contact" className="md:h-screen pt-24 pb-24 bg-zinc-500">
        <Wrapper className="grid grid-cols-2">
          <div className="uppercase font-bold text-6xl text-white">
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
      <NavBar></NavBar>
    </>
  );
}
