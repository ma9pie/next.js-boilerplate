import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import MediumButton from "@/components/common/Buttons/MediumButton";
import Calendar from "@/components/common/Calendar";
import LaboratoryLayout from "@/layouts/LaboratoryLayout";

function Components() {
  return (
    <Wrapper>
      <Calendar></Calendar>
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
