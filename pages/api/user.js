import { realDB } from "@/lib/firebase/initFirebase";
import "firebase/database";
import { onValue, ref } from "firebase/database";

export default function handler(req, res) {
  const dbRef = ref(realDB, "counts/" + req.query.id);

  return onValue(
    dbRef,
    (snapshot) => {
      res.status(200).json({
        total: snapshot.val(),
      });
    },
    {
      onlyOnce: true,
    }
  );
}
