import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import IndexButton from "@/components/common/Buttons";
import BottomButton from "@/components/common/Buttons/BottomButton";
import ExtraSmallButton from "@/components/common/Buttons/ExtraSmallButton";
import LargeButton from "@/components/common/Buttons/LargeButton";
import MediumButton from "@/components/common/Buttons/MediumButton";
import PillButton from "@/components/common/Buttons/PillButton";
import SmallButton from "@/components/common/Buttons/SmallButton";
import TextButton from "@/components/common/Buttons/TextButton";
import ComponentsLayout from "@/layouts/ComponentsLayout";

function Components() {
  return (
    <Wrapper>
      <ItemBox>
        <Title>56/Large</Title>
        <LargeButton>Large</LargeButton>
        <LargeButton type="sub">Large</LargeButton>
        <LargeButton disabled>Large</LargeButton>
      </ItemBox>

      <ItemBox>
        <Title>40/Medium</Title>
        <MediumButton>Medium</MediumButton>
        <MediumButton type="sub">Medium</MediumButton>
        <MediumButton disabled>Medium</MediumButton>
      </ItemBox>

      <ItemBox>
        <Title>40/Small</Title>
        <SmallButton>Small</SmallButton>
        <SmallButton type="sub">Small</SmallButton>
        <SmallButton disabled>Small</SmallButton>
      </ItemBox>

      <ItemBox>
        <Title>24/ExtraSmall</Title>
        <ExtraSmallButton>ExtraSmall</ExtraSmallButton>
        <ExtraSmallButton type="sub">ExtraSmall</ExtraSmallButton>
        <ExtraSmallButton disabled>ExtraSmall</ExtraSmallButton>
      </ItemBox>

      <ItemBox>
        <Title>20/Pill</Title>
        <PillButton>Pill</PillButton>
        <PillButton type="sub">Pill</PillButton>
        <PillButton disabled>Pill</PillButton>
      </ItemBox>

      <ItemBox>
        <Title>Text</Title>
        <TextButton>Text</TextButton>
        <TextButton type="sub">Text</TextButton>
      </ItemBox>

      <ItemBox>
        <Title>56/BottomButton</Title>
        <BottomButton>BottomButton</BottomButton>
      </ItemBox>
    </Wrapper>
  );
}

export default Components;

Components.getLayout = function getLayout(page) {
  return <ComponentsLayout>{page}</ComponentsLayout>;
};

const Wrapper = styled.div``;
const ItemBox = styled.div`
  display: grid;
  gap: 16px;
  margin-bottom: 16px;
`;
const Title = styled.p`
  font: var(--body16);
  margin-bottom: 8px;
`;
