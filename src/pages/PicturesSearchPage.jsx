import React, { useMemo, useState } from "react";

import ModelSection from "../sections/ModelSection";

import DiscoverPictureCard from "../components/DiscoverPictureCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";
import keyword_extractor from "keyword-extractor";

import Loader from "../components/loader/Loader";
import Modal from "../components/utility/Model/Model";
import CollectionKeywords from "../containers/CollectionKeywords";
import QueryTitle from "../components/QueryTitle";
import FiltrationContainer from "../containers/FiltrationContainer";
import { useParams, useSearchParams } from "react-router-dom";

import useSearchImages from "../hooks/useSearchImage";

const PicturesSearchPage = () => {
  const { query } = useParams();
  const [filtration] = useSearchParams();
  const filtrationValues = useMemo(() => {
    let filter = Object.fromEntries(filtration.entries());
    return filter;
  }, [filtration]);
  const [currentPage, setCurrentPage] = useState(1);
  const { images, loading, hasMore } = useSearchImages({
    query,
    currentPage,
    filtrationValues,
  });

  const [isModelOpen, setIsModelOpen] = useState(false);
  const handlePictureClick = (index) => {
    setSelectedPicture(index);
    setIsModelOpen(true);
  };
  const [selectedPicture, setSelectedPicture] = useState(0);

  const handleScrollNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const keywords = useMemo(() => {
    return images
      ?.map((ph) => {
        return keyword_extractor.extract(ph.alt, {
          remove_digits: true,
          remove_duplicates: true,
          language: "english",
          return_max_ngrams: 1,
        });
      })
      .flat();
  }, [images.length, query]);

  return (
    <div className="pt-10 flex flex-col gap-y-5">
      <CollectionKeywords items={keywords} />
      <QueryTitle query={query} searchType={"photos"} />

      <FiltrationContainer />
      <InfiniteScroll
        scrollThreshold={0.7}
        initialScrollY={100}
        hasMore={!isModelOpen || hasMore}
        dataLength={images?.length || 0}
        loader={<Loader className="w-fit mx-auto" />}
        next={handleScrollNext}
      >
        <ResponsiveMasonry>
          <Masonry
            gutter="10px"
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            {images?.map((picture, index) => {
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
            filtrationValues={filtrationValues}
          />
        )}
      </Modal>
    </div>
  );
};

export default PicturesSearchPage;
