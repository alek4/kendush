import NextLink from "next/link";
import { FC, useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

interface NavBarProps {
  isHomePage?: boolean
}

const NavBar: FC<NavBarProps> = ({isHomePage = false}) => {
  const [navbar, setNavbar] = useState(false);
  const buttonStyle =
    "text-zinc-900 bg-yellow-300 px-2 py-1 rounded-lg h-full flex items-center justify-center text-white uppercase font-semibold";

  return (
    <nav className="fixed bottom-14 right-9 md:right-16 lg:right-20 xl:right-32 2xl:right-52">
      <div className="justify-between mx-auto items-end flex flex-col md:flex-row lg:max-w-7xl ">
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-end justify-center space-y-5 flex flex-col md:items-stretch md:flex-row md:space-x-3 md:space-y-0">
              <div className="flex flex-row gap-3 flex-wrap justify-end md:space-y-0 md:flex-row">
                <NextLink href="/">
                  <li className={buttonStyle}>home</li>
                </NextLink>
                <NextLink href="/#about-us">
                  <li className={buttonStyle}>chi siamo</li>
                </NextLink>
                <NextLink href="/collections">
                  <li className={buttonStyle}>shop</li>
                </NextLink>
                {!isHomePage ? (<NextLink href="/cart">
                  <li className={buttonStyle}>carrello</li>
                </NextLink>) : null}
              </div>
              <div className="flex gap-3 md:flex">
                <NextLink href="https://www.facebook.com/yvon.bolankendu.3/">
                  <li className={`${buttonStyle} text-2xl`}>
                    <FaFacebook></FaFacebook>
                  </li>
                </NextLink>
                <NextLink href="https://www.instagram.com/kendu_official/">
                  <li className={`${buttonStyle} text-2xl`}>
                    <FaInstagram></FaInstagram>
                  </li>
                </NextLink>
                <NextLink href="https://www.youtube.com/channel/UCHqg3Se8c_s9s_f6s9eHzlw?view_as=subscriber">
                  <li className={`${buttonStyle} text-2xl`}>
                    <FaYoutube></FaYoutube>
                  </li>
                </NextLink>
                <NextLink href="https://wa.me/393661329976">
                  <li className={`${buttonStyle} text-2xl`}>
                    <FaWhatsapp></FaWhatsapp>
                  </li>
                </NextLink>
              </div>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mt-5 md:py-5 md:block ">
            <div className="md:hidden bg-yellow-300 rounded-lg">
              <button
                className="p-3 text-gray-700 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-zinc-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-zinc-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
