import styled from "@emotion/styled";
import React from "react";
import CommonLayout from "@/layouts/CommonLayout";

function Error404() {
  return (
    <Container>
      <TextBox>
        <Number>500</Number>
        <Text>Server Error</Text>
        <SubText>서버에러가 발생하였습니다.</SubText>
      </TextBox>
    </Container>
  );
}

export default Error404;

Error404.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};

const Container = styled.div`
  position: relative;
  height: calc(100vh - 115px);
`;
const TextBox = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Number = styled.div`
  font-size: 120px;
  color: var(--brand100);
`;
const Text = styled.div`
  font-size: 24px;
  margin-bottom: 24px;
`;
const SubText = styled.div`
  font-size: 16px;
`;
