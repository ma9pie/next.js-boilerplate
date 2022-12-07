import styled from "@emotion/styled";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countState } from "@/recoil/atom";

const ControlBox = () => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <Wrapper>
      <Title>ControlBox</Title>
      <Content>
        <Button onClick={() => setCount(count + 1)}>+</Button>
        <Button onClick={() => setCount(count - 1)}>-</Button>
      </Content>
    </Wrapper>
  );
};

export default ControlBox;

const Wrapper = styled.div`
  position: relative;
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

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 10px;
  font-size: 24px;
`;
