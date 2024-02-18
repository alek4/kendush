import GridProducts from "@/components/GridProducts";
import NavBar from "@/components/NavBar";
import { Product, categories, Categories } from "@/utils/ProductType";
import { Wrapper } from "@/components/Wrapper";
import NextLink from "next/link";
import Image from "next/image";

import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";

export default function ICanDo({ products }: any) {
  return (
    <div className="md:h-screen bg-[#f2f0ed] pt-24">
      <Wrapper className="grid grid-cols-1 md:gap-20 md:grid-cols-2">
        <div className="mb-20 md:mb-auto text-zinc-900">
          <h1 className="text-6xl font-bold mb-5">I CAN DO</h1>
          <p className="text-2xl mb-3">
            In occasione della nostra nuova collaborazione con la Onlus Italiana
            Solidarietà Pace e Sviluppo (SPS) abbiamo creato la nuova linea I
            CAN DO T-shirt/felpe.
          </p>
          <p className="text-2xl mb-3">
            Parte del ricavato sarà devoluto ai progetti di sostegno sanitario e
            scolastico in favore dei quaranta bambini che vivono presso
            l’associazione beninese Ensemble pour Grandir (Ouidah-Benin-Africa
            occidentale).
          </p>
          <p className="text-2xl mb-10">
            La Onlus Solidarietà Pace e Sviluppo segue e finanzia i progetti
            umanitari di Ensemble pour Grandir dal 2014.
          </p>
          <div className="flex flex-col gap-5 md:max-w-xs">
            <NextLink
              className="bg-white rounded-full py-4 text-center"
              href="/clothes"
            >
              T-SHIRT & FELPE
            </NextLink>
            <NextLink
              className="bg-white rounded-full py-4 text-center"
              href="/accessories"
            >
              ACCESSORI
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
              />
              <div className="flex flex-row justify-between mt-2 text-lg">
                <p>{prod.name}</p>
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
  const query = '*[_type == "product" && category == "icando"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};
