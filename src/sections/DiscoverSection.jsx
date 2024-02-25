import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import useDisCoverImages from "../hooks/useDisCoverImages";
import InfiniteScroll from "react-infinite-scroll-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import Tabs from "../components/utility/Tabs/Tabs";
import Tab from "../components/utility/Tabs/Tab";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DiscoverSection = () => {
  const [pageNumber, setPageNumber] = useState(1);
  // const [query, setQuery] = useState()
  const [category, setCategory] = useState(0);
  // const { images } = useDisCoverImages({
  //   currentPage: pageNumber,
  //   query: "",
  // });
  const images = [];
  return (
    <div className="container mx-auto">
      <Tabs
        onChange={(index) => {
          console.log(index);
          setCategory(index);
        }}
        isActive={category}
      >
        <Tab>Home</Tab>
        <Tab>Videos</Tab>
        <Tab>Leaderboard</Tab>
        <Tab>challenges</Tab>
      </Tabs>
      <InfiniteScroll
        hasMore={true}
        dataLength={images.length}
        loader={<h1>loading...</h1>}
        next={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        <ResponsiveMasonry>
          <Masonry
            className="grid gap-14 "
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            {images.map(({ src, height, width, url }, index) => {
              return (
                <LazyLoadImage
                  wrapperProps={{ style: { display: "contents" } }} // Remove container
                  key={index}
                  alt=""
                  effect="blur"
                  className="p-2"
                  height={height}
                  src={src.large2x}
                  width={width}
                />
              );
            })}{" "}
          </Masonry>
        </ResponsiveMasonry>{" "}
      </InfiniteScroll>
    </div>
  );
};

export default DiscoverSection;
