import React, { cloneElement } from "react";

const Tabs = ({ children, isActive, onChange }) => {
  const Children = React.Children.map(children, (child, index) => {
    return cloneElement(child, {
      onClick: () => onChange(index),
      active: index === isActive,
    });
  });
  return (
    <div className="py-8 font-bold capitalize flex-wrap w-fit mx-auto flex gap-1 text-md cap ">
      {Children}
    </div>
  );
};

export default Tabs;
