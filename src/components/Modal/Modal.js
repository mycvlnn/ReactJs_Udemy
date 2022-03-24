import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const Modal = ({ show, closed }) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={1000}
      classNames="slide-down"
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
