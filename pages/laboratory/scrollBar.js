import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import MediumButton from "@/components/common/Buttons/MediumButton";
import ScrollBar from "@/components/common/ScrollBar";
import LaboratoryLayout from "@/layouts/LaboratoryLayout";

function Components() {
  return (
    <Wrapper>
      <ScrollBar
        width="50%"
        height="600px"
        touchBottom={() => {
          console.log(2123);
        }}
      >
        <ListContainer>
          {new Array(30).fill().map((item, key) => (
            <List key={key}>{key + 1}</List>
          ))}
        </ListContainer>
      </ScrollBar>
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
const ScrollBarWrapper = styled.div`
  width: 300px;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
`;
const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--textBox);
  height: 40px;
  border-radius: 10px;
`;
