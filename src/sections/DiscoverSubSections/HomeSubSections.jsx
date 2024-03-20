import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useDisCoverImages from "../../hooks/useDisCoverImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import DiscoverPictureCard from "../../components/DiscoverPictureCard";
import Loader from "../../components/loader/Loader";
import Modal from "../../components/utility/Model/Model";
import ModelSection from "../ModelSection";

const HomeSubSections = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState({});

  const { images, hasMore } = useDisCoverImages({
    currentPage: pageNumber,
    query: "",
  });
  const handlePictureClick = (index) => {
    setSelectedPicture(index);
    setIsModelOpen(true);
  };
  const imageOnChange = () => {};

  return (
    <>
      <InfiniteScroll
        hasMore={!isModelOpen && hasMore}
        dataLength={images.length}
        loader={<Loader className="w-fit mx-auto" />}
        next={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        <ResponsiveMasonry>
          <Masonry
            className="grid gap-14 "
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            {images.map((picture, index) => {
              return (
                <DiscoverPictureCard
                  onClick={handlePictureClick}
                  {...picture}
                  index={index}
                  key={index}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
      <Modal isOpen={isModelOpen} close={setIsModelOpen}>
        {images[selectedPicture] && (
          <ModelSection
            picture={images[selectedPicture]}
            imageOnChange={imageOnChange}
          />
        )}
      </Modal>
    </>
  );
};

export default HomeSubSections;
