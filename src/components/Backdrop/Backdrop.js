import React from "react";

import "./Backdrop.css";

const Backdrop = ({ state }) => {
  const handleCssClasses = () => {
    if (state === "entering") return "BackdropOpen";
    if (state === "exiting") return "BackdropClosed";
    return null;
  };

  const cssClasses = ["Backdrop", handleCssClasses()];

  return <div className={cssClasses.join(" ")}></div>;
};

export default Backdrop;
