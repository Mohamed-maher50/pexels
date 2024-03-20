import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/loader/Loader";
import usePopularVideos from "../hooks/usePopularVideos";
import Modal from "../components/utility/Model/Model";
import VideoModal from "../components/videos/VideoModal";
import VideoMasonry from "../components/videos/VideoMasonry";
import VideoModelContainer from "../containers/videos/VideoModelContainer";

const DiscoverVideos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({});
  const { videos } = usePopularVideos({ currentPage });

  const handleVideoOnClick = (video) => {
    setSelectedVideo(video);
    setIsModelOpen(true);
  };

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
        {selectedVideo && <VideoModelContainer selectedVideo={selectedVideo} />}
      </Modal>
    </div>
  );
};

export default DiscoverVideos;
