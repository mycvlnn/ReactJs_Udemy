import MeetupDetail from "../../components/meetups/MeetupDetail";
const DetailMeetup = (props) => {
  const { meetupData } = props;
  return <MeetupDetail meetupData={meetupData} />;
};

export async function getStaticPaths() {
  //fetch data => convert data về dạng như bên dưới. Ở đây mình chỉ hard code như này để demo thôi.
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: false, //false => nếu gõ bừa id trên thanh URL => trả về 404.
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup

  //meetupId là giá trị tham số được truyền động trên URL
  const meetupId = context.params.meetupId;
  console.log("meetupId", meetupId);

  return {
    props: {
      meetupData: {
        img: "https://picsum.photos/1000",
        title: "A first Meetup",
        id: meetupId,
        address: "Some street 5, Some City",
        description: "The meetup description",
      },
    },
  };
}
export default DetailMeetup;
