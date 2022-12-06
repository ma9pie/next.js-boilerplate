import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import TestLayout from "@/layouts/ComponentsLayout";

function Components() {
  return (
    <Wrapper>
      <TypoBox>
        <Title>HEADLINES</Title>
        <Headlines24>Headings/Headline 24</Headlines24>
        <Headlines20>Headings/Headline 20</Headlines20>
        <Headlines18>Headings/Headline 18</Headlines18>
        <Headlines16>Headings/Headline 16</Headlines16>
      </TypoBox>
      <TypoBox>
        <Title>BODY</Title>
        <Body20>Body/Body 20</Body20>
        <Body18>Body/Body 18</Body18>
        <Body16>Body/Body 16</Body16>
        <Body14>Body/Body 14</Body14>
      </TypoBox>
      <TypoBox>
        <Title>META</Title>
        <Label14>Meta/Label 14</Label14>
        <Label12>Meta/Label 12</Label12>
        <Caption12>Meta/Caption 12</Caption12>
        <Caption10>Meta/Caption 10</Caption10>
      </TypoBox>
    </Wrapper>
  );
}

export default Components;

Components.getLayout = function getLayout(page) {
  return <TestLayout>{page}</TestLayout>;
};

const Wrapper = styled.div`
  padding: 16px;
`;
const TypoBox = styled.div`
  display: grid;
  gap: 16px;
  margin-bottom: 24px;
`;
const Title = styled.h2`
  font-weight: 1000;
  font-size: 40px;
  line-height: 64px;
`;

const Headlines24 = styled.p`
  font: var(--headline24);
`;
const Headlines20 = styled.p`
  font: var(--headline20);
`;
const Headlines18 = styled.p`
  font: var(--headline18);
`;
const Headlines16 = styled.p`
  font: var(--headline16);
`;

const Body20 = styled.p`
  font: var(--body20);
`;
const Body18 = styled.p`
  font: var(--body18);
`;
const Body16 = styled.p`
  font: var(--body16);
`;
const Body14 = styled.p`
  font: var(--body14);
`;

const Label14 = styled.p`
  font: var(--label14);
`;
const Label12 = styled.p`
  font: var(--label12);
`;
const Caption12 = styled.p`
  font: var(--caption12);
`;
const Caption10 = styled.p`
  font: var(--caption10);
`;
