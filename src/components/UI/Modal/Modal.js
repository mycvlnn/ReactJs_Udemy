import React, { Fragment } from "react"
import reactDom from "react-dom"
import classes from "./Modal.module.css"

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>
}

const ModalOverLay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

export default function Modal({ children, onClose }) {
  const rootOverlays = document.getElementById("overlays")
  return (
    <Fragment>
      {reactDom.createPortal(<Backdrop onClose={onClose} />, rootOverlays)}
      {reactDom.createPortal(
        <ModalOverLay>{children}</ModalOverLay>,
        rootOverlays
      )}
    </Fragment>
  )
}
