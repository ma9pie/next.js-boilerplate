import styled from "@emotion/styled";
import React from "react";
import Tooltip from "@/components/common/Tooltip";
import ComponentsLayout from "@/layouts/ComponentsLayout";
import InfoSvg from "@/svg/InfoSvg";

function Components() {
  return (
    <Wrapper>
      <Container>
        <Tooltip component={<Text>test tooltip</Text>}>
          <Trigger>
            <InfoSvg></InfoSvg>
            <Text>Tooltip</Text>
          </Trigger>
        </Tooltip>
      </Container>

      <Container>
        <GridBox>
          <Blank></Blank>
          <Tooltip placement="topLeft">
            <Box>top Left</Box>
          </Tooltip>
          <Tooltip placement="top">
            <Box>top</Box>
          </Tooltip>
          <Tooltip placement="topRight">
            <Box>top Right</Box>
          </Tooltip>
          <Blank></Blank>

          <Tooltip placement="leftTop">
            <Box>left Top</Box>
          </Tooltip>
          <Blank></Blank>
          <Blank></Blank>
          <Blank></Blank>
          <Tooltip placement="rightTop">
            <Box>right Top</Box>
          </Tooltip>

          <Tooltip placement="left">
            <Box>left</Box>
          </Tooltip>
          <Blank></Blank>
          <Blank></Blank>
          <Blank></Blank>
          <Tooltip placement="right">
            <Box>right</Box>
          </Tooltip>

          <Tooltip placement="leftBottom">
            <Box>left Bottom</Box>
          </Tooltip>
          <Blank></Blank>
          <Blank></Blank>
          <Blank></Blank>
          <Tooltip placement="rightBottom">
            <Box>right Bottom</Box>
          </Tooltip>

          <Blank></Blank>
          <Tooltip placement="bottomLeft">
            <Box>bottom Left</Box>
          </Tooltip>
          <Tooltip placement="bottom">
            <Box>bottom</Box>
          </Tooltip>
          <Tooltip placement="bottomRight">
            <Box>bottom Right</Box>
          </Tooltip>
          <Blank></Blank>
        </GridBox>
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
const Trigger = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
const Text = styled.p`
  font: var(--body14);
  line-height: 14px;
`;
const Container = styled.div`
  margin-bottom: 60px;
`;
const GridBox = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  gap: 2px;
  margin: auto;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: var(--caption10);
  background-color: var(--textBox);
  text-align: center;
  word-break: keep-all;
  border-radius: 5px;
  cursor: pointer;
`;
const Blank = styled.div`
  border-radius: 5px;
  background-color: var(--disableBtn);
`;
