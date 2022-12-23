import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Toggle from "@/components/common/Toggle";
import ComponentsLayout from "@/layouts/ComponentsLayout";

function Components() {
  const [checkLogin, setCheckLogin] = useState(false);
  const [checkNotice, setCheckNotice] = useState(false);
  const [check, setCheck] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Title>중요알림</Title>
        <Box>
          <Text>로그인 알림</Text>
          <Toggle
            id="login"
            checked={checkLogin}
            onChange={(check) => setCheckLogin(check)}
          ></Toggle>
        </Box>
        <Box>
          <Text>공지사항 알림</Text>
          <Toggle
            id="notice"
            checked={checkNotice}
            onChange={(check) => setCheckNotice(check)}
          ></Toggle>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Components;

Components.getLayout = function getLayout(page) {
  return <ComponentsLayout>{page}</ComponentsLayout>;
};

const Wrapper = styled.div`
  padding: 16px;
`;
const Container = styled.div`
  display: grid;
  gap: 24px;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.p`
  font: var(--headline16);
`;
const Text = styled.p`
  font: var(--body16);
`;
const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0px 20px;
  border-radius: 15px;
  background-color: var(--icon1);
  cursor: pointer;
`;
