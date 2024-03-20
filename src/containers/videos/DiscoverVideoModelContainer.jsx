import React, { useState } from "react";

import axios from "axios";
import fileDownload from "js-file-download";
import VideoModel from "../../components/videos/VideoModel";
import usePopularVideos from "../../hooks/usePopularVideos";

const DiscoverVideoModelContainer = ({ selectedVideo: currentVideo }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { videos, hasMore } = usePopularVideos({
    currentPage: pageNumber,
  });
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, `maher_Logo_${Date.now()}.mp4`);
      });
  };

  return (
    <VideoModel
      handleDownload={handleDownload}
      currentVideo={currentVideo}
      hasMore={hasMore}
      videos={videos}
      handleNextPage={() => setPageNumber(pageNumber + 1)}
    />
  );
};

export default DiscoverVideoModelContainer;
