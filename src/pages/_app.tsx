import "@/styles/globals.css";
import { Cloudinary } from "@cloudinary/url-gen";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "react-use-cart";
import { StateContext } from "../../context/StateContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>KENDUSH</title>
      </Head>
      <StateContext>
        <Toaster></Toaster>
        <Component {...pageProps} />
      </StateContext>
    </>
  );
}
