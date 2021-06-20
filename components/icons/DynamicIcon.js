import React from "react";
import Twitter from "./Twitter";
import Phone from "./Phone";
import Mail from "./Mail";

const Components = {
  twitter: Twitter,
  phone: Phone,
  mail: Mail,
};

const DynamicIcon = ({ type }) => {
  if (typeof Components[type] !== "undefined") {
    const Component = Components[type];
    return <Component />;
  }
  return null;
};

export default DynamicIcon;
