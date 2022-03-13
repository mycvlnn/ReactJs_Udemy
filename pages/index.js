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
const HomePage = () => {
  return <MeetupList meetups={DUMMY_DATA} />;
};

export default HomePage;
