import Gallery from "@/components/Gallery";
import NavBar from "@/components/NavBar";
import { Wrapper } from "@/components/Wrapper";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    setImages([
      "https://picsum.photos/1920/1080",
      "https://picsum.photos/1080/1920",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
      "https://picsum.photos/600",
    ]);
  }, []);

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
          <Gallery
            images={images}
            className="mb-16"
            autoSlide={false}
          ></Gallery>
          <Gallery
            images={images}
            autoSlide={false}
            autoSlideInterval={500}
          ></Gallery>
        </Wrapper>
      </div>
      <div id="cta" className="bg-[#f2f0ed] pt-24 pb-24">
        <Wrapper className="flex flex-col justify-center items-center">
          <NextLink href="/collections" className="flex items-center group uppercase text-yellow-400 font-bold text-5xl">
            Fai un salto nel nostro shop!
            <span className="hidden group-hover:block ml-5 text-4xl"><FaChevronRight></FaChevronRight></span>
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
