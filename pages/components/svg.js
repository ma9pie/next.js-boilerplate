import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import AnimatedBalanceSvg from "@/components/svg/AnimatedBalanceSvg";
import AnimatedHomeSvg from "@/components/svg/AnimatedHomeSvg";
import AnimatedTradeHistorySvg from "@/components/svg/AnimatedTradeHistorySvg";
import AnimatedTradeSvg from "@/components/svg/AnimatedTradeSvg";
import AnimatedViewMoreSvg from "@/components/svg/AnimatedViewMoreSvg";
import ComponentsLayout from "@/layouts/ComponentsLayout";

function Components() {
  return (
    <Wrapper>
      <Grid>
        <AnimatedHomeSvg color="white"></AnimatedHomeSvg>
        <AnimatedTradeSvg color="white"></AnimatedTradeSvg>
        <AnimatedBalanceSvg color="white"></AnimatedBalanceSvg>
        <AnimatedTradeHistorySvg color="white"></AnimatedTradeHistorySvg>
        <AnimatedViewMoreSvg color="white"></AnimatedViewMoreSvg>
      </Grid>
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
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 30px);
  gap: 16px;
`;
