import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Video from "../Video";

const VideoMasonry = ({ data, handleVideoOnClick }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry columnsCount={1} gutter="20px">
        {data.map((video, index) => {
          return (
            <Video
              key={index}
              urls={video.video_files}
              {...video}
              onClick={() => handleVideoOnClick(video)}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default VideoMasonry;
