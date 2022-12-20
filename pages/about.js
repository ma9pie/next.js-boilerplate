import styled from "@emotion/styled";
import Axios from "axios";
import React, { useEffect } from "react";
import CommonLayoput from "@/layouts/CommonLayout";

function About() {
  useEffect(() => {
    Axios.get("/api/test").then((res) => {
      console.log(res.data);
    });
  }, []);
  return <Wrapper>About</Wrapper>;
}
const Wrapper = styled.div``;

export default About;

About.getLayout = function getLayout(page) {
  return <CommonLayoput>{page}</CommonLayoput>;
};

const Test = styled.div`
  font: var(--headline24);
`;
