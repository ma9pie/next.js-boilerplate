import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import AnimatedBalanceSvg from "@/components/svg/AnimatedBalanceSvg";
import AnimatedHomeSvg from "@/components/svg/AnimatedHomeSvg";
import AnimatedTradeHistorySvg from "@/components/svg/AnimatedTradeHistorySvg";
import AnimatedTradeSvg from "@/components/svg/AnimatedTradeSvg";
import AnimatedViewMoreSvg from "@/components/svg/AnimatedViewMoreSvg";
import LaboratoryLayout from "@/layouts/LaboratoryLayout";

function Components() {
  return (
    <Wrapper>
      <Grid>
        <AnimatedHomeSvg></AnimatedHomeSvg>
        <AnimatedTradeSvg></AnimatedTradeSvg>
        <AnimatedBalanceSvg></AnimatedBalanceSvg>
        <AnimatedTradeHistorySvg></AnimatedTradeHistorySvg>
        <AnimatedViewMoreSvg></AnimatedViewMoreSvg>
      </Grid>
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
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 30px);
  gap: 16px;
`;
