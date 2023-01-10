import styled from "@emotion/styled";
import Axios from "axios";
import React, { useEffect } from "react";
import CommonLayoput from "@/layouts/CommonLayout";

function About() {
  return <Wrapper>About</Wrapper>;
}
const Wrapper = styled.div``;

export default About;

About.getLayout = function getLayout(page) {
  return <CommonLayoput>{page}</CommonLayoput>;
};
