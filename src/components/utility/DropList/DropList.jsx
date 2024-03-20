import React, { useEffect, useRef } from "react";

import Styles from "./styles.module.css";
import { useState } from "react";
import Svg from "./ArrowDown.svg";
const DropDown = ({
  onChange,
  className = "",
  labelClassName = "",
  options,
  placeholder,
  defaultValue,
  getLabel,
  getValue,
  disabled,
  containerClassName,
  optionClassName,
}) => {
  // if label and value not in structure
  if (getLabel && getValue) {
    options = options?.map((obj) => {
      return {
        label: getLabel(obj),
        value: getValue(obj),
      };
    });
    defaultValue = {
      label: getLabel(defaultValue),
      value: getValue(defaultValue),
    };
  }
  // check if there default value
  const initialSelected = defaultValue ||
    placeholder || {
      label: "Select ...",
    };

  const [selectedValue, setSelectedValue] = useState(initialSelected);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };
  const ref = useRef(null);
  useEffect(() => {
    const isClickInSide = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target))
        setIsOpen(false);
    };
    window.addEventListener("click", isClickInSide);
    return () => {
      window.removeEventListener("click", isClickInSide);
    };
  }, [isOpen]);

  const handleOptionClick = (selected, index) => {
    if (disabled) return;
    onChange && onChange(selected, index);
    setIsOpen(false);
    setSelectedValue(selected);
  };

  return (
    <div className={`relative  rounded-md ${className}`} ref={ref}>
      <div
        onClick={handleClick}
        className={`${disabled && "bg-gray-100"} ${
          Styles.valueLabelContainer
        } `}
      >
        <div
          className={`${labelClassName} ${Styles.valueLabel} justify-start `}
        >
          {selectedValue.label}
        </div>
        <img
          src={Svg}
          className={`${isOpen && "rotate-180"} duration-300 `}
          width={14}
          height={15}
          alt="toggle arrow"
        />
        {/* <IoIosArrowDown className={`${isOpen && "rotate-180"} duration-300`} /> */}
      </div>
      <div className="relative">
        <div
          className={`absolute  ${Styles.menu} top-2 left-0 w-full shadow-sm  ${
            isOpen && Styles.open
          } `}
        >
          <div className="overflow-auto max-h-64">
            <ul
              className={`border divide-y rounded-md  bg-gray-50 ${containerClassName} `}
            >
              {options?.map(
                ({ label, value, className = "", ...props }, index) => {
                  return (
                    <li
                      className={`py-2 px-2 ${Styles.listItem} ${className} ${optionClassName}`}
                      key={index}
                      onClick={() => handleOptionClick({ label, value }, index)}
                      {...props}
                    >
                      {label}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
