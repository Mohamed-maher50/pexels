import React, { useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useSearchVideos from "../../hooks/useSearchVideos";
import axios from "axios";
import fileDownload from "js-file-download";
import VideoModel from "../../components/videos/VideoModel";

const VideoModelContainer = ({ selectedVideo: currentVideo }) => {
  const { query } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParams] = useSearchParams();

  let filtrationValues = useMemo(() => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);
  const { videos, hasMore } = useSearchVideos({
    currentPage: pageNumber,
    query,
    filtrationValues,
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

export default VideoModelContainer;
