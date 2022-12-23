import { database, firestore } from "@/firebase/initFirebase";
import Axios from "axios";
import "firebase/database";
import { onValue, ref } from "firebase/database";

export default async function handler(req, res) {
  const { method, query, body } = req;

  switch (method) {
    case "GET":
      try {
        const user = await firestore
          .collection("user")
          .get()
          .then((snapshot) => snapshot.docs.map((doc) => doc.data()));
        res.status(200).json(user);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        if (!body.id) {
          res.status(200).json({ message: "유효하지 않은 id 값 입니다." });
          return;
        }
        const isExists = await firestore
          .collection("user")
          .doc(body.id)
          .get()
          .then((snapshot) => snapshot.exists);
        if (isExists) {
          res.status(200).json({ message: "이미 존재하는 id 입니다." });
          return;
        }
        firestore.collection("user").doc(body.id).set(body);
        res.status(200).json(body);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        if (!body.id) {
          res.status(200).json({ message: "유효하지 않은 id 값 입니다." });
          return;
        }
        const user = firestore.collection("user").doc(body.id);
        user.set({ name: "test", password: "1234" });
        res.status(200).json(body);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        firestore.collection("user").add(body);

        res.status(200).json(body);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
