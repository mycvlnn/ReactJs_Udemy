import React from "react";
import classes from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={classes["spinner-container"]}>
      <div className={classes["lds-spinner"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
