import React from "react";
import classes from "./MeetupDetail.module.css";

export default function MeetupDetail(props) {
  const { meetupData } = props;
  const { img, title, id, address, description } = meetupData;
  return (
    <section className={classes.detail}>
      <img src={img} alt="img" />
      <h1>{title}</h1>
      <div>ID: {id}</div>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
