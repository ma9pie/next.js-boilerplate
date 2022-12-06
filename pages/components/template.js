import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import MediumButton from "@/components/common/Buttons/MediumButton";
import TestLayout from "@/layouts/ComponentsLayout";

function Components() {
  return <Wrapper>template</Wrapper>;
}

export default Components;

Components.getLayout = function getLayout(page) {
  return <TestLayout>{page}</TestLayout>;
};

const Wrapper = styled.div`
  padding: 16px;
`;
