import React from "react";
import classes from "./MeetupDetail.module.css";

export default function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.img} alt="img" />
      <h1>{props.title}</h1>
      <div>ID: {props.id}</div>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
