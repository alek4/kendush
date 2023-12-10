import GridProducts from "@/components/GridProducts";
import NavBar from "@/components/NavBar";
import { Product, categories, Categories } from "@/utils/ProductType";
import { Wrapper } from "@/components/Wrapper";
import NextLink from "next/link";

import { client } from '../../sanity/lib/client'

export default function Clothes({ products }: any) {
  return (
    <div className="md:h-screen bg-[#f2f0ed] pt-24">
      <Wrapper className="grid grid-cols-1 md:gap-20 md:grid-cols-2">
        <div className="mb-20 md:mb-auto text-zinc-900">
          <h1 className="text-6xl font-bold mb-5">FELPE & T-SHIRT</h1>
          <p className="text-4xl mb-10">
            POSSIBILITA DI PERSONALIZZARE TUTTI I NOSTRI DESIGN CON IL TUO NOME
          </p>
          <div className="flex flex-col gap-5 md:max-w-xs">
            <NextLink
              className="bg-white rounded-full py-4 text-center"
              href="/accessories"
            >
              ACCESSORI
            </NextLink>
            <NextLink
              className="bg-white rounded-full py-4 text-center"
              href="/i-can-do"
            >
              I CAN DO
            </NextLink>
          </div>
        </div>
        {/* <GridProducts category={"clothes"}></GridProducts> */}
        <div className="grid grid-cols-2">
          {products?.map((product: any) => product.name)}
        </div>
        <NavBar></NavBar>
      </Wrapper>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: {products}
  }
}
