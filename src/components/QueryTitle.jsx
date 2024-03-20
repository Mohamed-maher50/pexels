import React from "react";

const QueryTitle = ({ query, searchType }) => {
  return (
    <h2 className="text-5xl font-semibold text-[#2c343e] capitalize">
      {query} <span>{searchType}</span>
    </h2>
  );
};

export default QueryTitle;
