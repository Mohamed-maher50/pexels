import React, { useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/loader/Loader";
import useSearchVideos from "../../hooks/useSearchVideos";
import { useParams, useSearchParams } from "react-router-dom";
import VideoMasonry from "../../components/videos/VideoMasonry";

const SearchPageVideoContainer = ({ handleVideoOnClick }) => {
  const { query } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  let filtrationValues = useMemo(() => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);
  const { videos, hasMore } = useSearchVideos({
    currentPage,
    query,
    filtrationValues,
  });
  return (
    <InfiniteScroll
      hasMore={hasMore}
      dataLength={videos.length}
      loader={<Loader className="w-fit mx-auto" />}
      next={() => {
        setCurrentPage(currentPage + 1);
      }}
    >
      <VideoMasonry
        data={videos}
        handleVideoOnClick={(video) => {
          handleVideoOnClick(video);
        }}
      />
    </InfiniteScroll>
  );
};

export default SearchPageVideoContainer;
