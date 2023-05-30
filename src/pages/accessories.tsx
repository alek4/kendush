import GridProducts from "@/components/GridProducts";
import NavBar from "@/components/NavBar";
import { Product, categories, Categories } from "@/utils/ProductType";
import { Wrapper } from "@/components/Wrapper";
import NextLink from "next/link";

export default function Accessories({ category }: any) {
  return (
    <div className="md:h-screen bg-[#f2f0ed] pt-24">
      <Wrapper className="grid grid-cols-1 md:gap-20 md:grid-cols-2">
        <div className="mb-20 md:mb-auto text-zinc-900">
          POSSIBILITA DI PERSONALIZZARE TUTTI I NOSTRI DESIGN CON IL TUO NOME
          <h1 className="text-6xl font-bold mb-5">FELPE & T-SHIRT</h1>
          <p className="text-4xl mb-10"></p>
          <div className="flex flex-col gap-5 md:max-w-xs">
            <NextLink
              className="bg-white rounded-full py-4 text-center"
              href="/"
            >
              ACCESSORI
            </NextLink>
            <NextLink
              className="bg-white rounded-full py-4 text-center"
              href="/"
            >
              I CAN DO
            </NextLink>
          </div>
        </div>
        <GridProducts category={"accessories"}></GridProducts>
        <NavBar></NavBar>
      </Wrapper>
    </div>
  );
}
