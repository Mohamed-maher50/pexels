import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/loader/Loader";
import VideoMasonry from "./VideoMasonry";
import VideoSwiper from "./VideoSwiper";
import VideoModelHeader from "./VideoModelHeader";
import { useEffect, useMemo, useRef, useState } from "react";
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
  let urls = useMemo(() => {
    console.log(selectedVideo?.video_files);
    return selectedVideo?.video_files?.map((file) => {
      return file.link;
    });
  }, [selectedVideo]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [selectedVideo]);
  useEffect(() => {
    setSelectedVideo(currentVideo);
  }, []);

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
