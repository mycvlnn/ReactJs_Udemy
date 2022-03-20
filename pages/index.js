//Nextjs sẽ detect bundle này và bỏ qua ở phía client.
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// //Accept async.
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://lengoaingu:gOpaSDs0cbp4f5ta@cluster0.p7kur.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  //Tìm ra tất cả dữ liệu
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  //Always return object.
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
      revalidate: 1,
    },
  };
}

export default HomePage;
