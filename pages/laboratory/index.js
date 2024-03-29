import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import LaboratoryLayout from "@/layouts/LaboratoryLayout";

function Components() {
  return (
    <Wrapper>
      <Title>Overview</Title>
      <Text>This is component collection page.</Text>
      <Text>
        Frequently used components are classified by list and developed.
      </Text>
    </Wrapper>
  );
}

export default Components;

Components.getLayout = function getLayout(page) {
  return <LaboratoryLayout>{page}</LaboratoryLayout>;
};

const Wrapper = styled.div``;
const Title = styled.p`
  font: var(--headline24);
  margin-bottom: 24px;
`;
const Text = styled.p`
  font: var(--body14);
`;
