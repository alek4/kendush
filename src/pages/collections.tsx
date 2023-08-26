import NavBar from "@/components/NavBar";
import { Wrapper } from "@/components/Wrapper";
import NextLink from "next/link";
import React from "react";

type Props = {};

export default function collections({}: Props) {
  return (
    <div
      id="collection"
      className="md:h-screen pt-24 pb-24 bg-[url(/images/image2.jpg)] bg-center bg-cover"
    >
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
            href={"/accessories"}
          >
            accessori
          </NextLink>
          <NextLink
            className="bg-white rounded-full py-5 w-full text-center uppercase "
            href={"/i-can-do"}
          >
            i can do
          </NextLink>
        </div>
      </Wrapper>
      <NavBar></NavBar>
    </div>
  );
}
