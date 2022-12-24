import { firestore } from "@/firebase/initFirebase";
import styled from "@emotion/styled";
import Axios from "axios";
import React, { useEffect } from "react";
import CommonLayoput from "@/layouts/CommonLayout";

function Home() {
  useEffect(() => {
    // Axios.get("/api/yogiyo").then((res) => {
    //   console.log(res.data);
    // });
  }, []);

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
