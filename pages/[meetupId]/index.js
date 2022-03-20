import { ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import connectDatabase from "../../config/mongodb";
const DetailMeetup = (props) => {
  const { meetupData } = props;
  return <MeetupDetail meetupData={meetupData} />;
};

export async function getStaticPaths() {
  const { meetupsCollection, client } = await connectDatabase();

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: false, //false => nếu gõ bừa id trên thanh URL => trả về 404.
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const { meetupsCollection, client } = await connectDatabase();

  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
  console.log("meetup", meetup);

  client.close();

  return {
    props: {
      meetupData: {
        img: meetup.image,
        title: meetup.title,
        id: meetup._id.toString(),
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
}
export default DetailMeetup;
