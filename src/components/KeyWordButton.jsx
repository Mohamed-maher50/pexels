import React from "react";

const KeyWordButton = ({ label }) => {
  return (
    <button class="px-6 w-full py-2 min-w-fit overflow-hidden duration-500 font-semibold text-center text-violet-600 border border-violet-600 rounded whitespace-nowrap hover:bg-violet-600 hover:bg-yellow-300  focus:outline-none ">
      {label}
    </button>
  );
};

export default KeyWordButton;
