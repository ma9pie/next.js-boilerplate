import styled from "@emotion/styled";
import React from "react";
import CommonLayoput from "@/layouts/CommonLayout";

const Typography = () => {
  return (
    <Wrapper>
      <TypoBox>
        <Title>Headlines</Title>
        <Headline24>Headline24</Headline24>
        <Headline20>Headline20</Headline20>
        <Headline18>Headline18</Headline18>
        <Headline16>Headline16</Headline16>
      </TypoBox>
      <TypoBox>
        <Title>Body</Title>
        <Body20>Body20</Body20>
        <Body18>Body18</Body18>
        <Body16>Body16</Body16>
        <Body14>Body14</Body14>
      </TypoBox>
      <TypoBox>
        <Title>Meta</Title>
        <Label14>Label14</Label14>
        <Label12>Label12</Label12>
        <Caption12>Caption12</Caption12>
        <Caption10>Caption10</Caption10>
      </TypoBox>
    </Wrapper>
  );
};

export default Typography;

Typography.getLayout = function getLayout(page) {
  return <CommonLayoput>{page}</CommonLayoput>;
};

const Wrapper = styled.div``;

const TypoBox = styled.div`
  margin: 20px 0px;
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
`;

const Headline24 = styled.p`
  font: var(--headline24);
`;
const Headline20 = styled.p`
  font: var(--headline20);
`;
const Headline18 = styled.p`
  font: var(--headline18);
`;
const Headline16 = styled.p`
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
