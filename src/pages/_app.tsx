import "@/styles/globals.css";
import { Cloudinary } from "@cloudinary/url-gen";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CartProvider } from "react-use-cart";

export default function App({ Component, pageProps }: AppProps) {
  const cld = new Cloudinary({ cloud: { cloudName: "dsuzhsobi" } });
  return (
    <>
      <Head>
        <title>KENDUSH</title>
      </Head>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}
