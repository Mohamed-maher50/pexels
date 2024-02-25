import React from "react";

const Items = ({ children, id }) => {
  return (
    <div
      id={id}
      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul
        className="py-2 p-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDelayButton"
      >
        {children}
      </ul>
    </div>
  );
};

export default Items;
