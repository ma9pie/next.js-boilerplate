import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import CheckBox from "@/components/common/CheckBox";
import LaboratoryLayout from "@/layouts/LaboratoryLayout";

function Components() {
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
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
  width: 80px;
`;
