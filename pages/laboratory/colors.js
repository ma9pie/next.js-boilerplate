import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import ComponentsLayout from "@/layouts/ComponentsLayout";

function Components() {
  return (
    <Wrapper>
      <ColorContainer>
        <Title>Brand Color</Title>
        <Grid>
          <ColorBox>
            <Color color="var(--brandColor)"></Color>
            <Text>Brand Color</Text>
          </ColorBox>
        </Grid>
      </ColorContainer>

      <ColorContainer>
        <Title>Text</Title>
        <Grid>
          <ColorBox>
            <Color color="var(--main)"></Color>
            <Text>Main</Text>
          </ColorBox>
          <ColorBox>
            <Color color="var(--sub)"></Color>
            <Text>Sub</Text>
          </ColorBox>
          <ColorBox>
            <Color color="var(--btn)"></Color>
            <Text>Btn</Text>
          </ColorBox>
        </Grid>
      </ColorContainer>

      <ColorContainer>
        <Title>Conponents</Title>
        <Grid>
          <ColorBox>
            <Color color="var(--main)"></Color>
            <Text>Textbox</Text>
          </ColorBox>
          <ColorBox>
            <Color color="var(--disabled)"></Color>
            <Text>Disable Btn</Text>
          </ColorBox>
          <ColorBox>
            <Color color="var(--sectionLine)"></Color>
            <Text>Section Line</Text>
          </ColorBox>
          <ColorBox>
            <Color color="var(--icon1)"></Color>
            <Text>Icon 1</Text>
          </ColorBox>
          <ColorBox>
            <Color color="var(--icon2)"></Color>
            <Text>Icon 2</Text>
          </ColorBox>
        </Grid>
      </ColorContainer>

      <ColorContainer>
        <Title>Colors</Title>
        <Grid>
          <ColorBox>
            <Color color="var(--red500)"></Color>
            <Text>Red</Text>
          </ColorBox>
          <ColorBox>
            <Color color="var(--green500)"></Color>
            <Text>Green</Text>
          </ColorBox>
          <ColorBox>
            <Color color="var(--blue500)"></Color>
            <Text>Blue</Text>
          </ColorBox>
        </Grid>
      </ColorContainer>

      <ColorContainer>
        <Title>Overlay</Title>
        <Grid>
          <ColorBox>
            <Color color="var(--overlay)"></Color>
            <Text>Scream</Text>
          </ColorBox>
          <ColorBox>
            <Color color="var(--toast)"></Color>
            <Text>Toast</Text>
          </ColorBox>
        </Grid>
      </ColorContainer>
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
const ColorContainer = styled.div`
  margin-bottom: 40px;
`;
const Title = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  margin-bottom: 16px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  gap: 16px;
`;
const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Color = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: 1px solid var(--sectionLine);
`;
const Text = styled.p`
  font: var(--caption10);
  margin-top: 8px;
`;
