import { database, firestore } from "@/firebase/initFirebase";
import styled from "@emotion/styled";
import Axios from "axios";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect } from "react";
import CommonLayoput from "@/layouts/CommonLayout";

function Home() {
  useEffect(() => {
    // Axios.get("/api/yogiyo").then((res) => {
    //   console.log(res.data);
    // });
    Axios.get("/api/user").then((res) => {
      console.log(res.data);
    });

    Axios.post("/api/user", {
      id: "asdasd",
      name: "zzzz",
      password: "1234",
    }).then((res) => {
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    // test();
  }, []);

  const test = async () => {
    const user = await firestore.collection("user").doc("asdasd");

    console.log(user);

    // user.add({ name: "zzz", password: 123123 });
  };

  return (
    <Wrapper>
      {Array(1)
        .fill()
        .map((item, key) => (
          <Test key={key}>index</Test>
        ))}
    </Wrapper>
  );
}
const Wrapper = styled.div``;

export default Home;

Home.getLayout = function getLayout(page) {
  return <CommonLayoput>{page}</CommonLayoput>;
};

const Test = styled.div`
  font: var(--headline24);
`;
