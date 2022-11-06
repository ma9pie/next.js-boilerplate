import styled from "@emotion/styled";
import Axios from "axios";
import React, { useEffect } from "react";
import CommonLayoput from "@/layouts/CommonLayout";

function Home() {
  useEffect(() => {
    Axios.get("/api/test").then((res) => {
      console.log(res.data);
    });
  }, []);
  return <Wrapper>index</Wrapper>;
}
const Wrapper = styled.div``;

export default Home;

Home.getLayout = function getLayout(page) {
  return <CommonLayoput>{page}</CommonLayoput>;
};
