import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "The first meetup",
    image: "https://picsum.photos/1000",
    address: "Thanh Loi Pho, Bo Hong Son",
  },
  {
    id: "m2",
    title: "The second meetup",
    image: "https://picsum.photos/1000",
    address: "Thanh Loi Pho, Bo Hong Son",
  },
];
const HomePage = (props) => {
  useEffect(() => {
    console.log("props", props);
  }, [props]);

  return <MeetupList meetups={props.meetups} />;
};

//Accept async.
export function getStaticProps() {
  //demo send request to server and fetch data

  //Always return object.
  return {
    props: {
      meetups: DUMMY_DATA || [],
      revalidate: 10,
    },
  };
}

export default HomePage;
