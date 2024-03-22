import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/loader/Loader";
import usePopularVideos from "../hooks/usePopularVideos";
import Modal from "../components/utility/Model/Model";
import VideoMasonry from "../components/videos/VideoMasonry";
import VideoModel from "../components/videos/VideoModel";
import axios from "axios";
import fileDownload from "js-file-download";
const DiscoverVideos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({});
  const { videos, hasMore } = usePopularVideos({ currentPage });
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, `maher_Logo_${Date.now()}.mp4`);
      });
  };
  const handleVideoOnClick = (video) => {
    setSelectedVideo(video);
    setIsModelOpen(true);
  };
  console.log(videos);
  return (
    <div className="px-2">
      <InfiniteScroll
        hasMore={!isModelOpen && true}
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
      <Modal isOpen={isModelOpen} close={setIsModelOpen}>
        {selectedVideo && (
          <VideoModel
            handleDownload={handleDownload}
            currentVideo={selectedVideo}
            hasMore={hasMore}
            videos={videos}
            handleNextPage={() => setCurrentPage(currentPage + 1)}
          />
        )}
      </Modal>
    </div>
  );
};

export default DiscoverVideos;
