import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/loader/Loader";
import useSearchVideos from "../../hooks/usePopularVideos";

import axios from "axios";
import fileDownload from "js-file-download";
import VideoMasonry from "./VideoMasonry";
import VideoSwiper from "./VideoSwiper";
import VideoModelHeader from "./VideoModelHeader";

const VideoModal = ({ selectedVideo: currentVideo }) => {
  const { query } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParams] = useSearchParams();
  const [indexVideo, setIndexVideo] = useState(-1);

  const container = useRef();
  let filtrationValues = useMemo(() => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);
  const { videos, hasMore } = useSearchVideos({
    currentPage: pageNumber,
    query,
    filtrationValues,
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [selectedVideo]);

  useEffect(() => {
    setSelectedVideo(currentVideo);
  }, []);

  let urls = useMemo(() => {
    return selectedVideo?.video_files?.map((file) => {
      return file.link;
    });
  }, [selectedVideo]);

  const containerModel = document.getElementById("model-container");

  const handleNext = () => {
    if (videos[indexVideo + 1]) {
      setSelectedVideo(videos[indexVideo + 1]);
      setIndexVideo(indexVideo + 1);
    }
  };
  const handlePrev = () => {
    if (videos[indexVideo - 1]) {
      setSelectedVideo(videos[indexVideo - 1]);
      setIndexVideo(indexVideo - 1);
    }
  };
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
        next={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        <VideoMasonry
          data={videos}
          handleVideoOnClick={(video) => {
            containerModel.scrollTo({
              top: 100,
              behavior: "smooth",
            });
            setSelectedVideo(video);
          }}
        />
      </InfiniteScroll>
    </div>
  );
};

export default VideoModal;
