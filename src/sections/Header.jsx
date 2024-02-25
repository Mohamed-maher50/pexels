import React from "react";
import SearchInput from "../components/utility/Search/Index";

const Header = () => {
  return (
    <div
      className="h-[600px] bg-cover  bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.5),rgba(0,0,0,0.5) ),url(https://images.pexels.com/photos/19311572/pexels-photo-19311572.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=2000)`,
      }}
    >
      <div className="container h-full mx-auto">
        <div className="h-full  gap-3  flex flex-col w-full items-center justify-center font-bold   text-3xl">
          <h1 className="max-w-2xl text-white">
            The best free stock photos, royalty free images & videos shared by
            creators.
          </h1>
          <SearchInput className={` h-14 w-full block  max-w-xl`} />
        </div>
      </div>
    </div>
  );
};

export default Header;
