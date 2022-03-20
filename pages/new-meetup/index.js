import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Fragment } from "react/cjs/react.production.min";
import Head from "next/head";

function NewMeetupPage() {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetup) => {
    console.log(enteredMeetup);
    //call api
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredMeetup),
    });
    const statusCode = response.status;
    const data = await response.json();
    if (statusCode === 201) {
      router.push("/");
    }
  };

  return (
    <Fragment>
      <Head>
        <title>New Meetup</title>
        <meta
          name="description"
          content="Adding your own meetups and create amazing networking opportunities!."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}

export default NewMeetupPage;
