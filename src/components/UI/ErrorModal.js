import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import Card from "./Card"
import classes from "./ErrorModal.module.css"
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}
const ModalOverlay = (props) => {
  const { onConfirm, title, message } = props
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
}
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  )
}
export default ErrorModal
