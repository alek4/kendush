import GridProducts from "@/components/GridProducts";
import NavBar from "@/components/NavBar";
import { Product, categories, Categories } from "@/utils/ProductType";
import { Wrapper } from "@/components/Wrapper";
import NextLink from "next/link";
import Image from "next/image";

import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";

export default function Clothes({ products }: any) {
  return (
    <div className=" bg-[#f2f0ed] pt-24 pb-20">
      <Wrapper className="grid grid-cols-1 lg:gap-20 lg:grid-cols-2">
        <div className="mb-20 lg:mb-auto text-zinc-900">
          <h1 className="text-6xl font-bold mb-5">T-SHIRT</h1>
          <p className="text-2xl mb-10">
            POSSIBILIT&Agrave; DI SCEGLIERE IL COLORE DELLA T-SHIRT E DI STAMPARE LE GRAFICHE ANCHE SULLE FELPE
          </p>
          <div className="flex flex-col gap-5 lg:max-w-xs">
            <NextLink
              className="bg-white rounded-full py-4 text-center"
              href="/accessories"
            >
              ACCESSORIES
            </NextLink>
            <NextLink
              className="bg-white rounded-full py-4 text-center"
              href="/i-can-do"
            >
              I CAN DO
            </NextLink>
            <NextLink
              className="bg-white rounded-full py-4 text-center"
              href="/most-wanted"
            >
              MOST WANTED
            </NextLink>
          </div>
        </div>
        {/* <GridProducts category={"clothes"}></GridProducts> */}
        <div className="grid grid-cols-1 overflow-x-clip overflow-y-auto gap-5 mb-24 md:h-[calc(100vh-12rem-5rem)] sm:grid-cols-2">
          {products.map((prod: any) => (
            <NextLink
              href={`/products/${prod.category}/${prod.slug.current}`}
              key={prod.id}
            >
              <Image
                className="aspect-1 object-cover"
                src={urlForImage(prod.image[0])}
                width={600}
                height={600}
                alt={prod.name}
                priority
              />
              <div className="flex flex-row justify-between mt-2 text-lg">
                <p>{prod.name.toUpperCase()}</p>
                <p>{prod.price} €</p>
              </div>
            </NextLink>
          ))}
        </div>
        <NavBar></NavBar>
      </Wrapper>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product" && category == "clothes"] | order(color asc)';
  var products = await client.fetch(query);

  var classic_hyper = {}
  const filter = products.filter((e: any) => {
    if (e.slug.current == "classic-hyper")
      classic_hyper = e;
    return e.slug.current != "classic-hyper";
  });
  
  products = [...filter]
  products.push(classic_hyper)

  return {
    props: { products },
  };
};
