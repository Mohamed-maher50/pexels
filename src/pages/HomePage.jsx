import React, { useEffect, useState } from "react";
import Header from "../sections/Header";

import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Tabs from "../components/utility/Tabs/Tabs";
import Tab from "../components/utility/Tabs/Tab";
import Navbar from "../components/navbar/Navbar";
import CollectionSwiper from "../components/utility/CollectionSwiper";
import { SwiperSlide } from "swiper/react";
// import Navbar from "../components/Navbar";

const HomePage = () => {
  const [category, setCategory] = useState(0);
  const nav = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/videos") {
      setCategory(1);
    } else if (pathname === "/") {
      setCategory(0);
    }
  }, [pathname]);
  return (
    <div className="">
      <Navbar />
      {/* <Navbar className="max-sm:bg-white lg:bg-transparent md:text-white" /> */}
      <Header />
      <div className=" p-2 flex gap-3 justify-center items-center  ">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return ` p-3 block  w-fit  rounded-full px-10 cursor-pointer ${
              isActive ? "bg-black shadow text-white" : "text-gray-600"
            }`;
          }}
        >
          Home
        </NavLink>

        <NavLink
          to={"/videos"}
          className={({ isActive }) => {
            return ` p-3 block  w-fit  rounded-full px-10 cursor-pointer ${
              isActive
                ? "bg-black shadow text-white"
                : "bg-gray-50 text-gray-600"
            }`;
          }}
        >
          Video
        </NavLink>

        {/* <Tabs
          onChange={(index) => {
            setCategory(index);
            if (index === 0) {
              nav("/");
            } else if (index === 1) {
              nav("/videos");
            }
          }}
          isActive={category}
        >
          <Tab>Home</Tab>
          <Tab>Videos</Tab>
          <Tab>Leaderboard</Tab>
          <Tab>challenges</Tab>
        </Tabs> */}
      </div>
      <Outlet />
    </div>
  );
};

export default HomePage;
