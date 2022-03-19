//POST /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    //Viết mã tại đây
    const client = await MongoClient.connect(
      "mongodb+srv://lengoaingu:gOpaSDs0cbp4f5ta@cluster0.p7kur.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    //Tạo ra một collections table.
    const meetupsCollection = db.collection("meetups"); //Nếu không có trong database nó sẽ tự động được tạo một cách nhanh chóng

    //Chèn một doc mới vào trong collection này

    try {
      const result = await meetupsCollection.insertOne(data);

      //trả lại trạng thái và message.
      res.status(201).json({
        message: "Meetup inserted!",
      });

      console.log("result", result);
    } catch (error) {
      //handle error
    } finally {
      //Close khi chung da hoan thanh
      client.close();
    }
  }
}

export default handler;
