//Nextjs sẽ detect bundle này và bỏ qua ở phía client.
import MeetupList from "../components/meetups/MeetupList";
import connectDatabase from "../config/mongodb";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// //Accept async.
export async function getStaticProps() {
  const { meetupsCollection, client } = await connectDatabase();

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
      revalidate: 10,
    },
  };
}

export default HomePage;
