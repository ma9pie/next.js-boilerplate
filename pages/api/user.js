import { firestore } from "@/firebase/initFirebase";
import "firebase/database";
import moment from "moment";

export default async function handler(req, res) {
  const { method, query, body } = req;

  switch (method) {
    // Read
    case "GET":
      try {
        let user = null;
        // get all
        if (!query.id) {
          user = await firestore
            .collection("user")
            .orderBy("createdAt", "asc")
            .get()
            .then((snapshot) =>
              snapshot.docs.map((doc) => {
                return { ...doc.data(), key: doc.id };
              })
            );
        }
        // get one
        else {
          user = await firestore
            .collection("user")
            .where("id", "==", query.id)
            .get()
            .then((snapshot) => snapshot.docs[0].data());
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    // Create
    case "POST":
      try {
        const isExists = await firestore
          .collection("user")
          .doc(body.id)
          .get()
          .then((snapshot) => snapshot.exists);
        if (isExists) {
          res.status(200).json({ message: "이미 존재하는 id 입니다." });
          return;
        }

        const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");

        await firestore
          .collection("user")
          .doc()
          .set({ ...body, createdAt: createdAt });
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    // Delete
    case "DELETE":
      try {
        await firestore.collection("user").doc(body.key).delete();
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
