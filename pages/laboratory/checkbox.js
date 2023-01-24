import styled from "@emotion/styled";
import React, { useState } from "react";
import CheckBox from "@/components/common/CheckBox";
import LaboratoryLayout from "@/layouts/LaboratoryLayout";

function Components() {
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Title>Check</Title>
        <CheckBox
          checked={check1}
          onClick={(checked) => {
            setCheck1(checked);
          }}
        ></CheckBox>
      </Container>

      <Container>
        <Title>Uncheck</Title>
        <CheckBox
          checked={check2}
          onClick={(checked) => {
            setCheck2(checked);
          }}
        ></CheckBox>
      </Container>

      <Container>
        <Title>Disabled</Title>
        <CheckBox
          disabled
          checked={check3}
          onClick={(checked) => {
            setCheck3(checked);
          }}
        ></CheckBox>
      </Container>

      <Container>
        <BigText>Check</BigText>
        <CheckBox
          width="30px"
          height="30px"
          checked={check4}
          onClick={(checked) => {
            setCheck4(checked);
          }}
        ></CheckBox>
      </Container>

      <CheckBox
        margin="0px 0px 0px 24px"
        checked={check5}
        onClick={(checked) => {
          setCheck5(checked);
        }}
      ></CheckBox>
    </Wrapper>
  );
}

export default Components;

Components.getLayout = function getLayout(page) {
  return <LaboratoryLayout>{page}</LaboratoryLayout>;
};

const Wrapper = styled.div`
  padding: 16px;
`;
const Container = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;
const Title = styled.div`
  width: 100px;
`;
const BigText = styled.div`
  width: 100px;
  font-size: 30px;
`;
