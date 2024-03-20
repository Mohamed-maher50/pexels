import KeyWordButton from "../components/KeyWordButton";
import CollectionSwiper from "../components/utility/CollectionSwiper";
import { SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";

const CollectionKeywords = ({ items = [] }) => {
  const nav = useNavigate();
  const handleClickCollectionKeyword = (keyword) => {
    nav(`/search/${keyword}`);
  };
  return (
    <div className="w-full  z-30 sticky top-10  bg-white p-5 pt-16">
      <CollectionSwiper>
        {items.map((keyword, index) => (
          <SwiperSlide
            className="w-full "
            onClick={() => handleClickCollectionKeyword(keyword)}
          >
            <KeyWordButton label={keyword} key={index} />
          </SwiperSlide>
        ))}
      </CollectionSwiper>
    </div>
  );
};

export default CollectionKeywords;
