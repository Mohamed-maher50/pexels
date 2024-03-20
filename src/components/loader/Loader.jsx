import React from "react";
import "./loader.css";
const Loader = ({ className = "", ...props }) => {
  return <div className={`loader ${className}`} {...props}></div>;
};

export default Loader;
