import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/loader/Loader";
import VideoMasonry from "./VideoMasonry";
import VideoSwiper from "./VideoSwiper";
import VideoModelHeader from "./VideoModelHeader";
import { useEffect, useMemo, useRef, useState } from "react";
function sortVideosByQuality(videos) {
  // Define the custom order of qualities
  const qualityOrder = ["sd", "hd", "uhd"];

  // Sort the videos array based on the custom order of qualities
  videos.sort((a, b) => {
    // Find the index of each quality in the custom order array
    const indexA = qualityOrder.indexOf(a.quality);
    const indexB = qualityOrder.indexOf(b.quality);

    // Compare the indices to determine the order
    return indexA - indexB;
  });

  return videos;
}
const VideoModal = ({
  handleDownload,
  hasMore,
  videos,
  handleNextPage,
  currentVideo,
}) => {
  const containerModel = document.getElementById("model-container");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [indexVideo, setIndexVideo] = useState(-1);
  let urls = selectedVideo?.video_files
    .sort((a, b) => a.width - b.width)
    .map((file) => file.link);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [selectedVideo]);
  useEffect(() => {
    setSelectedVideo(currentVideo);
  }, [currentVideo]);

  const handleNext = () => {
    if (videos[indexVideo + 1]) {
      setSelectedVideo(videos[indexVideo + 1]);
      setIndexVideo(indexVideo + 1);
    }
  };
  const handleVideoOnClick = (video) => {
    containerModel.scrollTo({
      top: 100,
      behavior: "smooth",
    });
    setSelectedVideo(video);
  };
  const handlePrev = () => {
    if (videos[indexVideo - 1]) {
      setSelectedVideo(videos[indexVideo - 1]);
      setIndexVideo(indexVideo - 1);
    }
  };
  const container = useRef();

  return (
    <div
      ref={container}
      id="model-container"
      className=" w-11/12 grid gap-10 duration-0 shadow-lg rounded-md p-4 md:p-7 bg-white"
    >
      <VideoModelHeader
        handleDownload={handleDownload}
        selectedVideo={selectedVideo}
      />
      {selectedVideo && (
        <VideoSwiper
          urls={urls}
          video={selectedVideo}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}

      <InfiniteScroll
        initialScrollY={0}
        hasMore={hasMore}
        scrollableTarget={"model-container"}
        scrollThreshold={0.5}
        dataLength={videos.length}
        loader={<Loader className="w-fit mx-auto " />}
        next={handleNextPage}
      >
        <VideoMasonry data={videos} handleVideoOnClick={handleVideoOnClick} />
      </InfiniteScroll>
    </div>
  );
};

export default VideoModal;
