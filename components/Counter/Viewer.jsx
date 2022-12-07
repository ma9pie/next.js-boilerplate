import styled from "@emotion/styled";
import React from "react";
import { useRecoilValue } from "recoil";
import { countState } from "@/recoil/atom";

const Viewer = () => {
  return (
    <Wrapper>
      <Title>Viewer</Title>
      <Content>{useRecoilValue(countState)}</Content>
    </Wrapper>
  );
};

export default Viewer;

const Wrapper = styled.div`
  margin: 20px;
  border: 1px solid black;
  width: 600px;
  height: 300px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
