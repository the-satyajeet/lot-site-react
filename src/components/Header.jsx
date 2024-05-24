import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { lotnavlogo } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

// Header

const Header = ({setActiveBody}) => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-[80%] z-50 flex border-b border-orange-600 bg-zinc-950 rounded-full ml-[10%] h-20 mb-5 lg:bg-n-8/90  p-4 ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 animate-in max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8"  onClick={() => setActiveBody("Hero")}>
          <img src={lotnavlogo} width={160} height={34} alt="LOT logo" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex lg:gap-[0.5] flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-red transition-colors hover:text-orange-600 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-white"
                    : "lg:text-white"
                } lg:leading-5 lg:hover:text-orange-600 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="flex items-center ml-12">
        <a onClick={() => setActiveBody("SignUp")}
          // href="#signup"
          className="button hidden mr-8 text-white transition-colors hover:text-orange-600 lg:block"
        >
          Sign up
        </a>

        <Button onClick={() => setActiveBody("Login")} className="hidden lg:flex">
          Sign in
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
