//Nextjs sẽ detect bundle này và bỏ qua ở phía client.
import connectDatabase from "../config/mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highy active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
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
