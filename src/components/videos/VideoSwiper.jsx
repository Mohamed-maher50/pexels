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
      <div className="md:px-5 w-fit   object-contain  mx-auto">
        {video && (
          <ReactPlayer
            url={urls}
            controls
            muted
            style={{
              margin: "0 auto",
              maxWidth: "fit-content",
            }}
            width={"100%"}
            height={"100%"}
          />
        )}
      </div>
      <FiArrowRightCircle
        onClick={handleNext}
        className=" text-3xl block absolute md:translate-x-5 top-1/2 right-0 z-0  max-sm:-translate-x-5   cursor-pointer text-white md:text-black"
      />
    </div>
  );
};

export default VideoSwiper;
