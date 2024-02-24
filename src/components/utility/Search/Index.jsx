import { SlPicture } from "react-icons/sl";
import Select from "../Select/Select";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { useState } from "react";
const options = [
  {
    label: "Picture",
    Icon: <SlPicture className="text-xl font-bold w-5 block" />,
  },
  {
    label: "videos",
    Icon: <MdOutlineSlowMotionVideo className="text-xl font-bold w-5 block" />,
  },
];
const Index = ({ className, ...props }) => {
  const [formValues, setFormValues] = useState({
    search: "",
    type: options[0].label,
  });
  console.log(formValues);
  const handleSelectBox = (value) => {
    console.log(value);
    setFormValues((prev) => ({ ...prev, type: value.label }));
  };
  const handleSearch = (e) => {
    setFormValues((prev) => ({ ...prev, search: e.target.value }));
  };
  return (
    <form
      onSubmit={() => {}}
      className={` bg-white shadow-md rounded-xl ${className} flex h-fit`}
      {...props}
    >
      <Select
        options={options}
        defaultValue={options[0]}
        onChange={handleSelectBox}
      />
      <input
        onChange={handleSearch}
        type="search"
        className=" w-full border-0 rounded-lg focus:shadow-none focus:ring-0"
        placeholder="Search for free photos"
      />
    </form>
  );
};

export default Index;
