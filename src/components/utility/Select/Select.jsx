import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Select = ({ onChange, options, defaultValue }) => {
  const [SelectedValue, setSelectedValue] = useState(defaultValue);

  const handleOnChange = (selected) => {
    setSelectedValue(selected);
    onChange(selected);
  };
  return (
    <div className="  group relative">
      <div className="p-2 overflow-hidden justify-between  cursor-pointer  rounded-lg bg-gray-200 border border-gray-300 text-[#292929] flex items-center  gap-3">
        <div className="flex items-center  text-sm gap-2">
          {SelectedValue.Icon}
          <span className="max-md:hidden">{SelectedValue.label}</span>
        </div>
        <FaAngleDown className="text-sm font-bold group-hover:rotate-180 duration-200 ease-out" />
      </div>
      <div className="absolute w-full">
        <ul className=" shadow-md grid mt-2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 -z-10  style group-hover:z-20  bg-white overflow-hidden text-sm w-full rounded-md top-12">
          {options.map(({ label, Icon }, index) => {
            return (
              <li
                key={index}
                className="flex items-center hover:bg-gray-200  px-2 py-3 duration-300 cursor-pointer  text-sm gap-2"
                onClick={() => handleOnChange(options[index])}
              >
                {Icon}
                <span className="max-sm:hidden">{label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Select);
