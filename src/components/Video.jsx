import React, { useRef } from "react";
import { FaCirclePlay } from "react-icons/fa6";

const playerVideo = (videoRef) => {
  videoRef.current.play().catch((err) => {
    console.log(err);
  });
};
let qualities = {
  sd: 2,
  hd: 1,
  uhd: 3,
};
const Video = ({ urls, image, height, ...otherProps }) => {
  const videoRef = useRef();
  let sortUrls = urls.sort((a, b) => {
    return qualities[a.quality] - qualities[b.quality];
  });

  const handleMouseEnter = () => {
    playerVideo(videoRef);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) videoRef.current.pause();
  };
  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-2 rounded-full absolute left-2 top-2 bg-[rgba(0,0,0,.8)] text-white">
        <FaCirclePlay />
      </div>

      <video
        ref={videoRef}
        preload="none"
        webkit-playsinline="true"
        playsinline="true"
        muted
        poster={image}
        height={`${urls[0].height + 10}px`}
        className="duration-500"
        onLoadedData={() => {
          console.log("loaded");
        }}
        {...otherProps}
      >
        {sortUrls.map((url) => {
          return (
            <source src={url.link} type="video/mp4" className="duration-500" />
          );
        })}
      </video>
    </div>
  );
};

export default Video;
