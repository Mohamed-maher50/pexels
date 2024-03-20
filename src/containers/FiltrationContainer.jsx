import React, { useEffect, useState } from "react";
import Tabs from "../components/utility/Tabs/Tabs";
import Tab from "../components/utility/Tabs/Tab";
import DropDown from "../components/utility/DropList/DropList";
import { TwitterPicker } from "react-color";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
const options = [
  {
    label: "popular",
    value: "popular",
  },
  {
    label: "options 1",
    value: "popular",
  },
  {
    label: "options 2",
    value: "popular",
  },
];
const OrientationsOptions = [
  {
    label: "all Orientation",
    value: "",
  },
  {
    label: "landscape",
    value: "landscape",
  },
  {
    label: "portrait",
    value: "portrait",
  },
  {
    label: "square",
    value: "square",
  },
];
const sizesOptions = [
  {
    label: "all Sizes",
    value: "",
  },
  {
    label: "large",
    value: "large",
  },
  {
    label: "medium",
    value: "medium",
  },
  {
    label: "small",
    value: "small",
  },
];
const FiltrationContainer = () => {
  const [pickerColorStatus, setPickerColorStatus] = useState(false);
  const [category, setCategory] = useState(0);
  const [filtration, setFiltration] = useSearchParams();
  const nav = useNavigate();
  const [selectedColor, setSelectedColor] = useState(
    filtration.get("color") ? "#" + filtration.get("color") : ""
  );

  const handleSearchParam = (name, value) => {
    setFiltration((prev) => {
      if (prev.has(name) && !value) {
        prev.delete(name);
        return prev;
      }
      prev.set(name, value);
      return prev;
    });
  };
  const handleColorChange = (val) => {
    setSelectedColor(val.hex);
    setPickerColorStatus(false);
    handleSearchParam("color", val.hex.slice(1));
  };
  const location = useLocation();
  const { query } = useParams();
  useEffect(() => {
    if (location.pathname.endsWith("videos")) {
      setCategory(1);
    }
  }, [location]);
  let defaultSize = filtration.get("size")
    ? sizesOptions.find((obj) => obj.value === filtration.get("size"))
    : sizesOptions[0];
  let defaultOrientation = filtration.get("orientation")
    ? OrientationsOptions.find(
        (obj) => obj.value === filtration.get("orientation")
      )
    : OrientationsOptions[0];
  return (
    <div>
      <div className="flex w-full items-center justify-between flex-wrap">
        <Tabs
          onChange={(index) => {
            if (index === 0) {
              nav(`/search/${query}/`);
            } else {
              nav(`/search/${query}/videos`);
            }
          }}
          isActive={category}
        >
          <Tab>Picture</Tab>
          <Tab>Videos</Tab>
        </Tabs>
      </div>

      <div className={`flex flex-wrap gap-5 `}>
        <DropDown
          options={OrientationsOptions}
          onChange={({ value }) => handleSearchParam("orientation", value)}
          defaultValue={defaultOrientation}
          className="min-w-52 grow z-20"
          labelClassName="px-3"
        />
        <DropDown
          options={sizesOptions}
          defaultValue={defaultSize}
          onChange={({ value }) => handleSearchParam("size", value)}
          className="min-w-52 grow z-10"
          labelClassName="px-3"
        />

        <div className="relative min-w-80 grow">
          <button
            className="w-full grow text-start z-10 border rounded-md p-2"
            onClick={() => setPickerColorStatus(!pickerColorStatus)}
          >
            {selectedColor ? (
              <div className="flex flex-wrap items-center gap-2">
                <div
                  className="h-6 w-6 rounded-full "
                  style={{ background: selectedColor }}
                ></div>
                <span className="text-gray-400 font-bold">{selectedColor}</span>
              </div>
            ) : (
              "color"
            )}
          </button>

          {pickerColorStatus && (
            <div className="absolute z-10 right-0">
              <TwitterPicker
                color={"#fff"}
                className=" w-full "
                triangle="top-right"
                onChange={handleColorChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FiltrationContainer;
