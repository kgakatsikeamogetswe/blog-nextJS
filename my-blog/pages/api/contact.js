import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ messgae: "Invalid input." });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    ////keaBlog:4M1AKGswkYExbVCN@cluster0.rpbonr1.mongodb.net/?retryWrites=true&w=majority

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.rpbonr1.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
    }
    client.close()
    res
      .status(201)
      .json({ message: "Succesfully stored message!", message: newMessage });
  }
}