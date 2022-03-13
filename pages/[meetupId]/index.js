import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const DetailMeetup = () => {
  const router = useRouter();
  return (
    <MeetupDetail
      img="https://picsum.photos/1000"
      title="A first Meetup"
      id={router.query.meetupId}
      address="Some street 5, Some City"
      description="The meetup description"
    />
  );
};
export default DetailMeetup;
