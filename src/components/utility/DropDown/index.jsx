import React, { Children } from "react";
import DropDownLabel from "./DropDownLabel";
import Items from "./Item";

const Index = ({ id, children }) => {
  const elements = Children.map(children, (child) => {
    return React.cloneElement(child, {
      id,
    });
  });

  return <div className="group">{elements}</div>;
};
Index.Items = Items;
Index.Label = DropDownLabel;
export default Index;
