import React from "react";

import "./Modal.css";

const Modal = ({ state, closed }) => {
  const handleCssClasses = () => {
    if (state === "entering") return "ModalOpen";
    if (state === "exiting") return "ModalClosed";
    return null;
  };

  const cssClasses = ["Modal", handleCssClasses()];

  return (
    <div className={cssClasses.join(" ")}>
      <h1>A Modal</h1>
      <button className="Button" onClick={closed}>
        Dismiss
      </button>
    </div>
  );
};

export default Modal;
