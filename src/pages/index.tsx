import GridProducts from "@/components/GridProducts";
import NavBar from "@/components/NavBar";
import { Wrapper } from "@/components/Wrapper";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <div id="home" className={`md:h-screen bg-[url(/images/image1.webp)] bg-center bg-cover pt-24 relative`}>
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
      <div id="collection" className="md:h-screen pt-24 pb-24 bg-[url(/images/image2.jpg)] bg-center bg-cover">
        <Wrapper className="">
          <div className="mb-16">
            <h2 className="uppercase text-green-400 font-bold text-5xl">
              collezione
            </h2>
            <h3 className="uppercase text-yellow-400 font-bold text-3xl">
              get yourself a piece of kendu
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 max-w-xs m-auto">
            <NextLink
              className="bg-white rounded-full py-5 w-full text-center uppercase "
              href={"/clothes"}
            >
              t-shirt & felpe
            </NextLink>
            <NextLink
              className="bg-white rounded-full py-5 w-full text-center uppercase "
              href={""}
            >
              accessori
            </NextLink>
            <NextLink
              className="bg-white rounded-full py-5 w-full text-center uppercase "
              href={""}
            >
              i can do
            </NextLink>
          </div>
        </Wrapper>
      </div>
      <div id="contact" className="md:h-screen pt-24 pb-24 bg-zinc-500">
        <Wrapper className="grid grid-cols-2">
          <div className="uppercase font-bold text-6xl text-white">
            <h1>fatti sentire.</h1>
            <h1>contattaci!</h1>
          </div>
          <div className="text-white">
            <h5 className="text-xl font-bold mb-3">Puoi connetterti con noi attraverso i seguenti canali:</h5>
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
