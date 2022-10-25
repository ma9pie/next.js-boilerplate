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

const Wrapper = styled.footer``;
const Copyright = styled.p``;
