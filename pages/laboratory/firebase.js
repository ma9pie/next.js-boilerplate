import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import MediumButton from "@/components/common/Buttons/MediumButton";
import ComponentsLayout from "@/layouts/ComponentsLayout";

function Components() {
  return <Wrapper>template</Wrapper>;
}

export default Components;

Components.getLayout = function getLayout(page) {
  return <ComponentsLayout>{page}</ComponentsLayout>;
};

const Wrapper = styled.div`
  padding: 16px;
`;
