import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "../utility/Search/Index";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Logo
      </span>
    </Link>
  );
};
const links = [
  {
    link: "Explore",
    href: "",
  },

  {
    link: "License",
    href: "",
  },
  {
    link: "Upload",
    href: "",
  },
];

const NavLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {links.map(({ link, href }) => {
        return <div>{link}</div>;
      })}
    </div>
  );
};
const MobileNavbarLinks = [
  {
    link: "Home",
    href: "/",
  },
  {
    link: "Discover Photos",
    href: "/",
  },
  {
    link: "Popular Searches",
    href: "/",
  },
  {
    link: "Free Videos",
    href: "/",
  },
  {
    link: "Challenges",
    href: "/",
  },
  {
    link: "Leaderboard",
    href: "/",
  },
  {
    link: "Login",
    href: "/",
  },
  {
    link: "join",
    href: "/",
  },
  {
    link: "change language",
    href: "/",
  },
  {
    link: "License",
    href: "/",
  },
  {
    link: "Apps & plugins",
    href: "/",
  },
  {
    link: "about us",
    href: "/",
  },
  {
    link: "FAQ",
    href: "/",
  },
  {
    link: "Imprint & Terms",
    href: "/",
  },
];
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [mobileNavState, setMobileNavState] = useState(false);

  const location = useLocation();

  const HomePage = location.pathname !== "/";
  console.log(HomePage);
  const pageOnScroll = () => {
    if (window.scrollY > 200 && !isActive) setIsActive(true);
    else setIsActive(false);
  };
  useEffect(() => {
    if (mobileNavState) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [mobileNavState]);

  useEffect(() => {
    pageOnScroll();
    window.addEventListener("scroll", pageOnScroll);
    return () => {
      window.removeEventListener("scroll", pageOnScroll);
    };
  }, []);

  return (
    <div
      className={` top-0 left-0  z-50 flex duration-500 flex-wrap  right-0 py-3 px-4 md:px-10 ${
        mobileNavState || isActive || HomePage ? "fixed" : "absolute"
      }  ${
        mobileNavState
          ? "fixed bg-black text-white"
          : isActive
          ? "bg-white text-black"
          : HomePage
          ? "text-black bg-white "
          : "text-white"
      }`}
    >
      <div className="flex items-center w-full gap-4 justify-between">
        <div className="">
          <Logo />
        </div>
        <div className="max-sm:hidden">
          {HomePage && <SearchInput className={`grow w-full`} />}
        </div>
        {mobileNavState && <SearchInput className={`grow w-full`} />}

        <div className="flex  items-center gap-3 ml-auto">
          <div className=" max-sm:hidden">
            <NavLinks />
          </div>
          {!mobileNavState && (
            <button className="px-5  py-3 bg-primary text-white shadow-md rounded-md">
              Join
            </button>
          )}
        </div>
        {mobileNavState ? (
          <IoCloseOutline
            onClick={() => setMobileNavState(false)}
            className="text-4xl sm:hidden cursor-pointer"
          />
        ) : (
          <CiMenuBurger
            onClick={() => {
              setMobileNavState(true);
            }}
            className="text-2xl sm:hidden cursor-pointer"
          />
        )}
      </div>
      {mobileNavState && (
        <ul className="overflow-auto w-full h-screen">
          {MobileNavbarLinks.map(({ link, href, index }) => {
            return (
              <Link className="block py-3 text-xl" to={href} key={index}>
                {link}
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
