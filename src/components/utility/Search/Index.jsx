import React from "react";
import { IoSearch } from "react-icons/io5";

const Index = ({ className, ...props }) => {
  if (window.location.pathname === "/") return <></>;
  return (
    <form
      className={`flex  ms-4 overflow-hidden rounded-lg  ${className}`}
      {...props}
    >
      <label
        for="search-dropdown"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Your Email
      </label>
      <button
        id="dropdown-button"
        data-dropdown-toggle="dropdown"
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button"
      >
        All categories
        <svg
          className="w-2.5 h-2.5 ms-2.5"
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
      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdown-button"
        >
          <li>
            <button
              type="button"
              className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              pictures
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              videos
            </button>
          </li>
        </ul>
      </div>
      <div className="relative w-full ">
        <input
          type="search"
          id="search-dropdown"
          className="block placeholder:text-md placeholder:text-gray-400 placeholder:font-bold h-full p-2.5 w-full focus:shadow-none focus:ring-0 border-none focus:border-none z-20 text-sm text-gray-900 bg-gray-50       dark:text-white "
          placeholder="Search"
          required
        />
        <button
          type="submit"
          className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-400  focus:outline-none   dark:hover:bg-blue-700 "
        >
          <IoSearch className="text-xl" />
        </button>
      </div>
    </form>
  );
};

export default Index;
