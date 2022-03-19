import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

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
    console.log(statusCode);
    console.log("data", data);
    if (statusCode === 201) {
      router.push("/");
    }
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
