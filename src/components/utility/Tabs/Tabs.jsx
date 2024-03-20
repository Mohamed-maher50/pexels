import React, { cloneElement } from "react";

const Tabs = ({ children, isActive, onChange, className = "" }) => {
  const Children = React.Children.map(children, (child, index) => {
    return cloneElement(child, {
      onClick: () => onChange(index),
      active: index === isActive,
    });
  });
  return (
    <div
      className={` py-8 font-bold capitalize flex-wrap w-fit flex gap-1 text-md ${className} `}
    >
      {Children}
    </div>
  );
};

export default Tabs;
