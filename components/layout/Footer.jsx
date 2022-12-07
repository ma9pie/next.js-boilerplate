import styled from "@emotion/styled";
import React from "react";

function Footer() {
  return (
    <Wrapper>
      <Copyright>Copyright 2022 ma9pie All rights reserved</Copyright>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  position: relative;
  height: 48px;
  padding: 16px;
  background-color: var(--textBox);
  & * {
    background-color: inherit;
  }
`;
const Copyright = styled.p`
  text-align: right;
`;
