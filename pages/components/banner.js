import styled from "@emotion/styled";
import React from "react";
import Carousel from "@/components/common/Carousel";
import TestLayout from "@/layouts/ComponentsLayout";

function Component() {
  return (
    <Wrapper>
      <CarouselContainer>
        <Carousel
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <WebBanner backgroundColor="#F9584A"></WebBanner>
          <WebBanner backgroundColor="#EBE313"></WebBanner>
          <WebBanner backgroundColor="#0AA323"></WebBanner>
          <WebBanner backgroundColor="#2AAAEB"></WebBanner>
        </Carousel>

        <Carousel
          width="200px"
          borderRadius="10px"
          overflow="hidden"
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <MobileBanner backgroundColor="#44EEF0"></MobileBanner>
          <MobileBanner backgroundColor="#2FF53C"></MobileBanner>
          <MobileBanner backgroundColor="#DC0BDE"></MobileBanner>
          <MobileBanner backgroundColor="#FA890D"></MobileBanner>
        </Carousel>
      </CarouselContainer>
    </Wrapper>
  );
}

export default Component;

Component.getLayout = function getLayout(page) {
  return <TestLayout>{page}</TestLayout>;
};

const Wrapper = styled.div``;
const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const WebBanner = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;
const MobileBanner = styled.div`
  width: 200px;
  height: 60px;
  background-color: ${(props) => props.backgroundColor};
`;
