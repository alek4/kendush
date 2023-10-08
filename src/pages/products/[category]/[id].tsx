import Carousel from "@/components/Carousel";
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
import { useCart } from "react-use-cart";

export default function ProductPage(product: Product) {
  const { addItem } = useCart();
  const [size, setSize] = useState("M");
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const { category } = router.query;
    console.log(category);
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

  return (
    <>
      <Head>
        <title>{`KENDUSH | ${product.name}`}</title>
      </Head>
      <div className="h-auto lg:h-screen bg-[#f2f0ed] pt-14 lg:pt-24">
        <Wrapper className="flex flex-col lg:gap-20 lg:flex-row lg:justify-between">
          <Carousel
            images={product.images}
            className="lg:hidden max-w-lg mx-auto"
          ></Carousel>

          <div className="hidden lg:flex w-1/2">
            <div className="flex flex-col gap-3 mr-3">
              {product.images.map((img, i) => (
                <Image
                  onClick={() => setSelectedImage(i)}
                  key={i}
                  src={img}
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
                  backgroundImage: `url(${product.images[selectedImage]})`,
                }}
              />
            </div>
          </div>

          <div className="mb-32 mt-10 md:mt-20 lg:w-1/2 lg:mb-auto text-zinc-900">
            <h1 className="text-5xl md:text-6xl font-bold mb-5">
              {product.name}
            </h1>
            <p className="text-4xl mb-3">{product.price} €</p>
            <select
              onChange={(e) => setSize(e.target.value)}
              value={size}
              name="size"
              id="size"
              className="my-3 py-3 px-4 pr-9 block w-fit border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
            >
              <option value="M">M</option>
              <option value="S">S</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <p className="mb-10 text-lg first-letter:uppercase">{product.description}</p>

            <div className="flex flex-col gap-5 lg:max-w-xs">
              <button
                className="bg-white rounded-full py-4 text-center"
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
  const products = await fetchProducts();

  if (!products || products.length === 0) {
    return {
      paths: [],
      fallback: "blocking", // Set to 'blocking' to show 404 for all unmatched paths
    };
  }

  // Generate paths based on the products
  const paths = products.map((product) => ({
    params: { id: product.id, category: product.category },
  }));

  return {
    paths,
    fallback: true, // Set to true to allow fallback rendering for unmatched paths
  };
}

export async function getStaticProps({ params }: any) {
  const product = await fetchProductById(params.id, params.category);

  console.log(product);
  

  return {
    // Passed to the page component as props
    props: product,
  };
}
