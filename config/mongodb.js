import { MongoClient } from "mongodb";

/**
 * Connect to the database.
 * @returns {Promise<{meetupsCollection: Collection, client: MongoClient}>} - A promise that resolves to a
 * collection and a client.
 */
const connectDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://lengoaingu:gOpaSDs0cbp4f5ta@cluster0.p7kur.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  return { meetupsCollection, client };
};

export default connectDatabase;
