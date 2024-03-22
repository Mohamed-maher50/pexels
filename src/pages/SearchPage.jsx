import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const SearchPage = () => {
  return (
    <section>
      <Navbar withSearchBar={true} />
      <div className=" px-2 md:px-16 pt-20">
        <Outlet />
      </div>
    </section>
  );
};

export default SearchPage;
