import styled from "@emotion/styled";
import React from "react";
import Carousel from "@/components/common/Carousel";
import ComponentsLayout from "@/layouts/ComponentsLayout";

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

        <CarouselWrapper>
          <Carousel slidesPerView={"auto"} spaceBetween={8} freeMode={true}>
            {[...new Array(10)].map((item, key) => (
              <Box key={key}></Box>
            ))}
          </Carousel>
        </CarouselWrapper>
      </CarouselContainer>
    </Wrapper>
  );
}

export default Component;

Component.getLayout = function getLayout(page) {
  return <ComponentsLayout>{page}</ComponentsLayout>;
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
const CarouselWrapper = styled.div`
  .swiper-slide {
    width: auto;
  }
`;
const Box = styled.div`
  display: inline-block;
  font: var(--caption12);
  width: 150px;
  height: 250px;
  background-color: var(--textBox);
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`;
