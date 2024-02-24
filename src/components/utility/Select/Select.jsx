import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Select = ({ onChange, options, defaultValue }) => {
  const [SelectedValue, setSelectedValue] = useState(defaultValue);

  const handleOnChange = (selected) => {
    setSelectedValue(selected);
    onChange(selected);
  };
  return (
    <div className="p-2  group relative">
      <div className="p-2 overflow-hidden justify-between  cursor-pointer  rounded-lg bg-gray-200 border border-gray-300 text-[#292929] flex items-center  gap-3">
        <div className="flex items-center  text-sm gap-2">
          {SelectedValue.Icon}
          {SelectedValue.label}
        </div>
        <FaAngleDown className="text-sm font-bold group-hover:rotate-180 duration-200 ease-out" />
      </div>
      <ul className="absolute shadow-md grid delay-200 -z-10 group-hover:z-20  bg-white overflow-hidden text-sm w-full rounded-md top-14">
        {options.map(({ label, Icon }, index) => {
          return (
            <li
              key={index}
              className="flex items-center hover:bg-gray-200  px-2 py-3 duration-300 cursor-pointer  text-sm gap-2"
              onClick={() => handleOnChange(options[index])}
            >
              {Icon}
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(Select);
