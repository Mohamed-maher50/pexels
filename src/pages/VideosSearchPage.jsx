import React, { useState } from "react";
import QueryTitle from "../components/QueryTitle";
import { useParams } from "react-router-dom";
import FiltrationContainer from "../containers/videos/FiltrationContainer";
import Modal from "../components/utility/Model/Model";
import SearchPageVideoContainer from "../containers/videos/SearchPageVideoContainer";
import DiscoverVideoModelContainer from "../containers/videos/DiscoverVideoModelContainer";

const VideosSearchPage = () => {
  const { query } = useParams();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <QueryTitle query={query} searchType={"videos"} />
      <div className="py-3">
        <FiltrationContainer />
      </div>
      <SearchPageVideoContainer
        handleVideoOnClick={(video) => {
          console.log(video);
          setSelectedVideo(video);
          setIsModelOpen(true);
        }}
      />

      <Modal isOpen={isModelOpen} close={setIsModelOpen}>
        {selectedVideo && (
          <DiscoverVideoModelContainer selectedVideo={selectedVideo} />
        )}
      </Modal>
    </div>
  );
};

export default VideosSearchPage;
