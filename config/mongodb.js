import { MongoClient } from "mongodb";

const connectDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://lengoaingu:gOpaSDs0cbp4f5ta@cluster0.p7kur.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  return { meetupsCollection, client };
};

export default connectDatabase;
