import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, close, children, className = "" }) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <div
          id="model-container"
          className="fixed z-50 w-full max-md:p-0 p-2 md:p-5 h-full left-0 overflow-auto bg-black top-0"
        >
          <div className=" flex max-sm:flex-col items-center justify-center">
            <IoClose
              onClick={() => close(false)}
              className="text-white text-4xl   self-start sm:fixed left-5  cursor-pointer hover:scale-95 "
            />
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
