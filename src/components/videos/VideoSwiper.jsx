import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import ReactPlayer from "react-player";

const VideoSwiper = ({ handleNext, handlePrev, video, urls }) => {
  return (
    <div className="w-full relative  mx-auto">
      <FiArrowLeftCircle
        onClick={handlePrev}
        className=" text-3xl block absolute top-1/2 md:-translate-x-5 z-50 text-white  max-sm:translate-x-5  cursor-pointer md:text-black"
      />
      <div className="md:px-5 w-fit   object-contain  mx-auto">
        {video && (
          <ReactPlayer
            url={urls}
            controls
            muted
            light="https://images.pexels.com/videos/1526909/free-video-1526909.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
            style={{
              margin: "0 auto",
              maxWidth: "fit-content",
              minWidth: "600px",
              minHeight: "400px",
            }}
            width={"100%"}
            height={"100%"}
          />
        )}
      </div>
      <FiArrowRightCircle
        onClick={handleNext}
        className=" text-3xl block absolute md:translate-x-5 top-1/2 right-0  z-50  max-sm:-translate-x-5   cursor-pointer text-white md:text-black"
      />
    </div>
  );
};

export default VideoSwiper;
