import React, { useEffect, useState } from "react";
import DropDown from "../../components/utility/DropList/DropList";
import Tab from "../../components/utility/Tabs/Tab";
import Tabs from "../../components/utility/Tabs/Tabs";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

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
    label: "all sizes",
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
  const [category, setCategory] = useState(0);
  const [params, setPrams] = useSearchParams();
  const nav = useNavigate();
  const loaction = useLocation();
  const { query } = useParams();
  useEffect(() => {
    if (loaction.pathname.endsWith("videos")) {
      setCategory(1);
    } else {
      setCategory(0);
    }
  }, [loaction]);

  const handleFiltrationOnChange = ({ value, name }) => {
    setPrams((prev) => {
      if (prev.has(name) && !value) {
        prev.delete(name);
        return prev;
      }

      prev.set(name, value);

      return prev;
    });
  };
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
          onChange={({ value }) =>
            handleFiltrationOnChange({ value, name: "orientation" })
          }
          defaultValue={OrientationsOptions[0]}
          className="min-w-52 grow z-20"
          labelClassName="px-3"
        />
        <DropDown
          options={sizesOptions}
          defaultValue={sizesOptions[0]}
          onChange={({ value }) =>
            handleFiltrationOnChange({ value, name: "size" })
          }
          className="min-w-52 grow z-10"
          labelClassName="px-3"
        />
      </div>
    </div>
  );
};

export default FiltrationContainer;
