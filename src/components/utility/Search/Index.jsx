import { SlPicture } from "react-icons/sl";
import Select from "../Select/Select";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
const options = [
  {
    label: "pictures",
    Icon: <SlPicture className="text-xl font-bold w-5 block" />,
  },
  {
    label: "videos",
    Icon: <MdOutlineSlowMotionVideo className="text-xl font-bold w-5 block" />,
  },
];

const SearchInput = ({ className, ...props }) => {
  const nav = useNavigate();
  const [searchType, setSearchType] = useState("pictures");
  const searchValue = useRef(null);
  const handleSelectBox = ({ label }) => {
    setSearchType(label);
  };
  console.log(searchType);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchType === "pictures") {
      nav(`/search/${searchValue.current.value}`);
    } else if (searchType === "videos") {
      nav(`/search/${searchValue.current.value}/videos`);
    }
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={` bg-gray-100 rounded-lg ${className} flex h-fit`}
      {...props}
    >
      <Select
        options={options}
        defaultValue={options[0]}
        onChange={handleSelectBox}
      />
      <input
        ref={searchValue}
        type="search"
        className=" w-full border-0 bg-transparent rounded-lg  focus:shadow-none focus:ring-0"
        placeholder="Search for free photos"
      />
    </form>
  );
};

export default SearchInput;
