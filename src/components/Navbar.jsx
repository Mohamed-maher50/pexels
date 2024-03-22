import { Link } from "react-router-dom";
import DropDown from "../components/utility/DropDown/";
import SearchInput from "../components/utility/Search/Index";
import { useEffect, useState } from "react";

const menuLinks = {
  pages: [
    {
      label: "Home",
      link: "",
    },
    {
      label: "Discover Photos",
      link: "",
    },
    {
      label: "Popular Searches",
      link: "",
    },
    {
      label: "Free Videos",
      link: "",
    },
    {
      label: "Challenges",
      link: "",
    },
    {
      label: "Leaderboards",
      link: "",
    },
    {
      label: "Pexels Blog",
      link: "",
    },
  ],
  subscribeLink: [
    {
      label: "Login",
      link: "",
    },
    {
      label: "Join",
      link: "",
    },
    {
      label: "Change Languages",
      link: "",
    },
  ],
  info: [
    {
      label: "Apps & Plugins",
      link: "",
    },
    {
      label: "FAQ",
      link: "",
    },
    {
      label: "About Us",
      link: "",
    },
    {
      label: "Imprint & Terms      ",
      link: "",
    },
  ],
};
const dropDown = [
  {
    label: "explore photos",
    link: "",
  },
  {
    label: "popular search",
    link: "",
  },
  {
    label: "leaderboard",
    link: "",
  },
  {
    label: "challenges",
    link: "",
  },
  {
    label: "free videos",
    link: "",
  },
];
const Navbar = ({ withSearchBar = false, className = "" }) => {
  const location = !withSearchBar && "hidden";
  const [isFixed, setIsFixed] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 200) setIsFixed(true);
    else setIsFixed(false);
  };
  console.log(isFixed);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`  duration-300  ${className} ${
        isFixed
          ? "fixed text-black lg:bg-white lg:text-black bg-white "
          : "absolute"
      }  w-full z-40 top-0 start-0  dark:border-gray-600`}
    >
      <div className="max-w-screen-xl mx-auto gap-2 flex flex-wrap items-center   p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Logo
          </span>
        </Link>
        <SearchInput className={`grow max-w-[700px]  ${location}`} />
        <div className="flex md:order-2 max-md:ms-auto  space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center ms-auto  px-2 justify-end hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          {/* show in large screen */}
          <ul className="flex flex-col items-start   p-4 md:p-0 mt-4 font-medium border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0    ">
            <div className="max-md:hidden flex gap-3">
              <DropDown id={"exploreItem"}>
                <DropDown.Label>Explore</DropDown.Label>
                <DropDown.Items>
                  {dropDown.map(({ label, link }) => {
                    return (
                      <li className="p-2 text-md capitalize block">
                        <Link to={link} className="block">
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </DropDown.Items>
              </DropDown>
              <li>
                <Link to="#" aria-current="page">
                  License
                </Link>
              </li>
            </div>
            <div className="sm:hidden w-full divide-y-2  divide-gray-300">
              <ul className="w-full block">
                {menuLinks.pages.map(({ label, link }, index) => {
                  return (
                    <li key={index} className="p-2">
                      <Link to={link} className="block">
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="w-full">
                {menuLinks.subscribeLink.map(({ label, link }, index) => {
                  return (
                    <li key={index} className="p-2 w-full">
                      <Link to={link} className="block">
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="w-full">
                {menuLinks.info.map(({ label, link }, index) => {
                  return (
                    <li key={index} className="p-2">
                      <Link to={link} className="block">
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
