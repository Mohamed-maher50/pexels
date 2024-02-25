import React from "react";

const Tab = ({ active = false, children, ...props }) => {
  console.log(props);
  return (
    <div
      {...props}
      className={` p-3   w-fit  rounded-full px-5 cursor-pointer ${
        active ? "bg-black shadow text-white" : "text-gray-600"
      }`}
    >
      {children}
    </div>
  );
};

export default Tab;
