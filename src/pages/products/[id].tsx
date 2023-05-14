import React from "react";
import Product from "@/utils/ProductType";
import fetchProductByName from "@/utils/FetchProductByName";
import fetchProducts from "@/utils/FetchProducts";
import NavBar from "@/components/NavBar";
import GridProducts from "@/components/GridProducts";
import { Wrapper } from "@/components/Wrapper";
import NextLink from "next/link";
import Image from "next/image";

export default function ProductPage({ name, image, price }: Product) {
  return (
    <div className="md:h-screen bg-[#f2f0ed] pt-24">
      <Wrapper className="grid grid-cols-1 md:gap-20 md:grid-cols-2">
        <Image src={image} width={600} height={600} alt={name} />
        
        <div className="mb-20 md:mb-auto text-zinc-900">
          <h1 className="text-6xl font-bold mb-5">{name}</h1>
          <p className="text-4xl mb-10">
            {price} €
          </p>

          <div className="flex flex-col gap-5 md:max-w-xs">
            <NextLink
              className="bg-white rounded-full py-4 text-center"
              href="/"
            >
              AGGIUNGI AL CARRELLO
            </NextLink>
          </div>
        </div>
        <NavBar></NavBar>
      </Wrapper>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await fetchProducts();

  if (!products || products.length === 0) {
    return {
      paths: [],
      fallback: "blocking", // Set to 'blocking' to show 404 for all unmatched paths
    };
  }

  // Generate paths based on the products
  const paths = products.map((product) => ({
    params: { id: product.name },
  }));

  return {
    paths,
    fallback: true, // Set to true to allow fallback rendering for unmatched paths
  };
}

export async function getStaticProps({ params }: any) {
  const product = await fetchProductByName(params.id);

  return {
    // Passed to the page component as props
    props: { ...product },
  };
}
