import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const VideoModelHeader = ({ selectedVideo, handleDownload }) => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="flex gap-3 flex-wrap p-3">
        <div>
          <img
            src={"https://avatar.iran.liara.run/public/boy?username=Ash"}
            className="h-14 shadow-lg object-contain rounded-full w-14"
            alt={selectedVideo?.user?.name}
          />
        </div>
        <div className="capitalize flex flex-col justify-between">
          <span className=" text-gray-700 text-lg font-bold">
            {selectedVideo?.user?.name}
          </span>
          <div className="flex gap-3 text-lg font-semibold text-gray-500">
            <span className="cursor-pointer">follow</span>
            <span className="cursor-pointer">donate</span>
          </div>
        </div>
      </div>
      <div className="relative  ">
        <div className="flex relative  h-fit font-bold rounded-md items-center   bg-primary    text-white">
          <button className="py-3 px-4 hover:bg-[rgba(0,0,0,0.2)] border-r  duration-500 border-gray-700 ">
            Free Download
          </button>
          <button className="text-xl group block px-3  relative hover:bg-[rgba(0,0,0,0.2)]  duration-500 py-4">
            <IoIosArrowDown />
            <div className="absolute  z-30 mt-4  right-0 hidden group-hover:block">
              <div className=" text-md text-black text-start mt-4     min-w-60 overflow-hidden shadow-sm  right-0  border rounded-md bg-gray-50 w-full ">
                <ul>
                  {selectedVideo?.video_files?.map((file, index) => {
                    return (
                      <button
                        onClick={() => {
                          handleDownload(file.link);
                        }}
                        key={index}
                        className="p-2 w-full flex uppercase  items-center text-sm gap-5 cursor-pointer duration-500 px-5 hover:bg-gray-200"
                      >
                        <span className="text-base font-extrabold text-gray-700">
                          {file.quality}
                        </span>
                        <div className="flex items-center gap-2 text-gray-400 font-extrabold text-sm">
                          <span>{file.width}</span>X<span>{file.height}</span>
                        </div>
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
  );
};

export default VideoModelHeader;
