import React, { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/loader/Loader";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import DiscoverPictureCard from "../components/DiscoverPictureCard";
import useSearchImages from "../hooks/useSearchImage";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import fileDownload from "js-file-download";

const imageObj = {
  id: 0,
  width: 0,
  height: 0,
  url: "",
  photographer: "",
  photographer_url: "",
  photographer_id: 0,
  avg_color: "",
  src: {
    original: "",
    large2x: "",
    large: "",
    medium: "",
    small: "",
    portrait: "",
    landscape: "",
    tiny: "",
  },
  liked: false,
  alt: "Photo Of Stream During Daytime",
};
const ModelSection = ({ picture = imageObj }) => {
  const [modalImage, setModalImage] = useState(picture);
  const [pageNumber, setPageNumber] = useState(1);
  const containerModel = document.getElementById("model-container");

  const { src, photographer } = modalImage;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { images, hasMore, loading } = useSearchImages({
    currentPage: pageNumber,
    query: modalImage.alt || "natural",
  });

  useEffect(() => {
    setModalImage(picture);
  }, [picture]);
  const handleNext = () => {
    if (images[selectedImageIndex + 1]) {
      setModalImage(images[selectedImageIndex + 1]);
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };
  const handlePrev = () => {
    if (images[selectedImageIndex - 1]) {
      setModalImage(images[selectedImageIndex - 1]);
    }
  };
  const downloadImage = async (url, fileName) => {
    const response = await axios.get(url, {
      responseType: "blob",
    });
    const contentType = response.headers["content-type"];
    const blob = new Blob([response.data], { type: contentType });
    fileDownload(blob, fileName);
  };
  let urls = modalImage?.src && Object.entries(modalImage.src);
  return (
    <div className=" w-11/12  duration-0 shadow-lg rounded-md p-3 md:p-7 bg-white">
      <div className="flex items-center flex-wrap justify-between">
        <div className="flex gap-3 flex-wrap p-3">
          <div>
            <img
              src="https://avatar.iran.liara.run/public/boy?username=Ash"
              className="h-14 shadow-lg object-contain rounded-full w-14"
              alt={photographer}
            />
          </div>
          <div className="capitalize flex flex-col justify-between">
            <span className=" text-gray-700 text-lg font-bold">
              {photographer}
            </span>
            <div className="flex gap-3 text-lg font-semibold text-gray-500">
              <span className="cursor-pointer">follow</span>
              <span className="cursor-pointer">donate</span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative  ">
            <div className="flex relative  h-fit font-bold rounded-md items-center   bg-primary    text-white">
              <button className="py-3 px-2 hover:bg-[rgba(0,0,0,0.2)] border-r  duration-500 border-gray-700 ">
                Free Download
              </button>
              <button className="text-xl group block px-3  relative hover:bg-[rgba(0,0,0,0.2)]  duration-500 py-4">
                <IoIosArrowDown />
                <div className="absolute  z-30 mt-4  right-0 hidden group-hover:block">
                  <div className=" text-md text-black text-start mt-4     min-w-60 overflow-hidden shadow-sm  right-0  border rounded-md bg-gray-50 w-full ">
                    <ul>
                      {urls?.map(([key, value], index) => {
                        return (
                          <button
                            onClick={() => {
                              downloadImage(
                                value,
                                "maher_logo" + Date.now() + ".jpeg"
                              );
                            }}
                            key={index}
                            className="p-2 flex  w-full  items-center text-sm gap-5 cursor-pointer duration-500 px-5 hover:bg-gray-200"
                          >
                            <span className="text-base font-extrabold text-gray-700">
                              {key}
                            </span>
                          </button>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <FiArrowLeftCircle
          onClick={handlePrev}
          className=" text-3xl block absolute text-green-600 top-1/2 z-50 left-5 cursor-pointer "
        />
        <div className="w-fit my-5 mx-auto">
          <img
            src={src?.large}
            alt=""
            className=" object-content  rounded-md lg:max-w-[700px] max-h-[500px] shadow-md  "
          />
        </div>
        <FiArrowRightCircle
          onClick={handleNext}
          className=" text-3xl block absolute text-green-600 top-1/2 right-5 cursor-pointer "
        />
      </div>
      <InfiniteScroll
        initialScrollY={0}
        hasMore={hasMore}
        scrollableTarget={"model-container"}
        scrollThreshold={0.5}
        dataLength={images.length}
        loader={<Loader className="w-fit mx-auto " />}
        next={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        <ResponsiveMasonry>
          <Masonry
            gutter="10px"
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            {images.map((picture, index) => {
              return (
                <DiscoverPictureCard
                  onClick={() => {
                    containerModel.scrollTo({
                      top: 70,
                      behavior: "smooth",
                    });
                    setTimeout(() => {
                      setModalImage(picture);
                    }, 500);
                    setPageNumber(1);
                  }}
                  {...picture}
                  index={index}
                  key={index}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
    </div>
  );
};

export default ModelSection;
