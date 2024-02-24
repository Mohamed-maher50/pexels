import React from "react";

const DropDownLabel = ({ children, id }) => {
  return (
    <button
      id="dropdownDelayButton"
      data-dropdown-toggle={id}
      data-dropdown-delay="200"
      data-dropdown-trigger="hover"
      class="   focus:outline-none font-medium rounded-lg text-sm   text-center inline-flex items-center "
      type="button"
    >
      {children}
      <svg
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
  );
};

export default DropDownLabel;
