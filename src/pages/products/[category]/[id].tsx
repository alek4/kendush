import NavBar from "@/components/NavBar";
import { Wrapper } from "@/components/Wrapper";
import fetchProductById from "@/utils/FetchProductById";
import fetchProducts from "@/utils/FetchProducts";
import { Product } from "@/utils/ProductType";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Carousel } from "react-responsive-carousel";
import { useCart } from "react-use-cart";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { useStateContext } from "../../../../context/StateContext";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function ProductPage(product: any) {
  const { addItem } = useCart();
  const [size, setSize] = useState("M");
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState(0);
  const { qty, incQty, decQty } = useStateContext();

  useEffect(() => {
    const { category } = router.query;
  }, []);

  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = (e: any) => {
    const image = e.target;

    setIsZoomed(false);

    image.style.backgroundPosition = `${0}% ${0}%`;
    image.style.backgroundSize = `100%`;
  };

  const handleMouseMove = (e: any) => {
    if (isZoomed) {
      const image = e.target;
      const zoomLevel = 3; // Adjust the zoom level as needed

      const offsetX = e.nativeEvent.offsetX;
      const offsetY = e.nativeEvent.offsetY;
      const x = (offsetX / image.offsetWidth) * 100;
      const y = (offsetY / image.offsetHeight) * 100;

      const backgroundPosition = `${x}% ${y}%`;

      image.style.backgroundPosition = backgroundPosition;
      image.style.backgroundSize = `${zoomLevel * 100}%`;
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Head>
        <title>{`KENDUSH | ${product.name}`}</title>
      </Head>
      <div className="h-auto lg:h-screen bg-[#f2f0ed] pt-14 lg:pt-24">
        <Wrapper className="flex flex-col lg:gap-20 lg:flex-row">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            className="lg:hidden max-w-lg mx-auto"
            renderArrowNext={(clickHandler: () => void) => (
              <div
                onClick={clickHandler}
                className="block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer"
              >
                <FaChevronRight />
              </div>
            )}
            renderArrowPrev={(clickHandler: () => void) => (
              <div
                onClick={clickHandler}
                className="block absolute z-50 top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-5 rounded-full bg-black/20 text-white cursor-pointer"
              >
                <FaChevronLeft />
              </div>
            )}
          >
            {product.image.map((img: any, index: any) => (
              <Image
                key={index}
                className={`duration-500 object-cover aspect-1 ${
                  isLoading ? "grayscale blur-2xl" : "grayscale-0 blur-0"
                }`}
                onLoadingComplete={() => setIsLoading(false)}
                src={urlForImage(img)}
                width={100}
                height={100}
                sizes={"100wh"}
                alt={`img-${index + 1}`}
              />
            ))}
          </Carousel>

          <div className="hidden lg:flex w-1/3 flex-col gap-5">
            <div
              className="relative aspect-1 object-cover w-full h-fit"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <div
                className={`bg-cover bg-center w-full h-full transition-transform duration-300 ${
                  isZoomed ? "transform scale-150" : ""
                }`}
                style={{
                  backgroundImage: `url(${urlForImage(
                    product.image[selectedImage]
                  )})`,
                }}
              />
            </div>

            <div className="flex flex-row gap-3 mr-3">
              {product.image.map((img: any, i: number) => (
                <Image
                  onClick={() => setSelectedImage(i)}
                  key={i}
                  src={urlForImage(img)}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100wh"
                  className={`aspect-1 object-cover max-w-[7rem] cursor-pointer ${
                    selectedImage == i ? "border-4 border-yellow-300" : ""
                  }`}
                  style={{ width: "100%", height: "auto" }} // optional
                ></Image>
              ))}
            </div>
          </div>

          <div className="mb-32 mt-10 md:mt-5 lg:w-1/2 lg:mb-auto text-zinc-900">
            <h1 className="text-5xl md:text-6xl mb-7 font-bold">
              {product.name}
            </h1>
            <div className="mb-10">
              <p className="font-bold text-xl mb-2">Dettagli:</p>
              <p className="text-lg first-letter:uppercase">{product.detail}</p>
            </div>
            <p className="font-bold text-3xl mb-10">{product.price} €</p>
            <div className="flex items-stretch gap-5 mb-8">
              <p className="font-bold my-auto text-xl">Taglia: </p>
              <select
                onChange={(e) => setSize(e.target.value)}
                value={size}
                name="size"
                id="size"
                className="py-3 px-4 mr-5 rounded-md bg-neutral-300"
              >
                <option value="M">M</option>
                <option value="S">S</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>

              <p className="font-bold my-auto text-xl ">Quantità: </p>

              <div className="rounded-md bg-neutral-300 flex items-center gap-5">
                <div onClick={() => decQty()} className="rounded-l-md hover:bg-neutral-400 h-full px-4 flex items-center">
                  <FiMinus />
                </div>
                <p>{qty}</p>
                <div onClick={() => incQty()} className="rounded-r-md hover:bg-neutral-400 h-full px-4 flex items-center">
                  <FiPlus />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:max-w-xs">
              <button
                className="bg-white rounded-lg py-4 text-center"
                onClick={() => {
                  const item = { ...product, size: size };
                  addItem(item);
                  toast.success("Prodotto aggiunto al carrello!");
                }}
              >
                AGGIUNGI AL CARRELLO
              </button>
            </div>
          </div>
          <NavBar></NavBar>
          <Toaster />
        </Wrapper>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  if (!products || products.length === 0) {
    return {
      paths: [],
      fallback: "blocking", // Set to 'blocking' to show 404 for all unmatched paths
    };
  }

  // Generate paths based on the products
  const paths = products.map((product: any) => ({
    params: { id: product.slug.current, category: product.category },
  }));

  return {
    paths,
    fallback: true, // Set to true to allow fallback rendering for unmatched paths
  };
}

export async function getStaticProps({ params }: any) {
  const query = `*[_type == "product" && slug.current == "${params.id}" && category == "${params.category}"]`;

  const product = await client.fetch(query);

  return {
    // Passed to the page component as props
    props: product[0],
  };
}
