import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import ReactPlayer from "react-player";

const VideoSwiper = ({ handleNext, handlePrev, video, urls }) => {
  return (
    <div className="w-full relative  mx-auto">
      <FiArrowLeftCircle
        onClick={handlePrev}
        className=" text-3xl block z-0 absolute top-1/2 md:-translate-x-5  text-white  max-sm:translate-x-5  cursor-pointer md:text-black"
      />
      <div className="md:px-5    object-contain  mx-auto">
        <div className="flex justify-center w-fit">
          {video && (
            <ReactPlayer
              url={urls}
              controls
              muted
              width={"100%"}
              height={"100%"}
              style={{
                width: "fit-content",
              }}
            />
          )}
        </div>
      </div>
      <FiArrowRightCircle
        onClick={handleNext}
        className=" text-3xl block absolute md:translate-x-5 top-1/2 right-0 z-0  max-sm:-translate-x-5   cursor-pointer text-white md:text-black"
      />
    </div>
  );
};

export default VideoSwiper;
