import React from "react";
import SearchInput from "../components/utility/Search/Index";
import useHeaderPicture from "../hooks/useHeaderPicture";
const Header = () => {
  const { headerPicture } = useHeaderPicture();

  // useEffect(() => {
  //   if (appState === "Pictures") dispatch(getHeroPictures());
  //   else if (appState === "videos") dispatch(getHeroVideos());
  // }, [appState]);

  return (
    <>
      <div
        className=" bg-cover  flex  justify-center w-full items-center min-h-[500px] bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.5),rgba(0,0,0,0.5) ),url(${headerPicture?.src.landscape})`,
        }}
      >
        <div className="w-fit p-2 sm:px-5 flex justify-center items-center">
          <div className="h-full w-fit   gap-3  flex flex-col items-center  font-bold   text-lg sm:text-3xl">
            <h1 className=" md:text-center text-white">
              The best free stock photos, royalty free images &<br /> videos
              shared by creators.
            </h1>
            <SearchInput className={`  w-full block  max-w-xl`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
