import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SwiperCore, { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation]);

function Carousel(props) {
  const swiperRef = useRef();

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    if (props.tabNum > swiperRef.current.swiper.activeIndex) {
      handleNext();
    } else if (props.tabNum < swiperRef.current.swiper.activeIndex) {
      handlePrev();
    }
  }, [props.tabNum]);

  return (
    <Wrapper {...props}>
      <Swiper
        ref={swiperRef}
        loop={props.loop}
        autoplay={props.autoplay}
        spaceBetween={props.spaceBetween}
        slidesPerView={props.slidesPerView}
        loopAdditionalSlides={props.loopAdditionalSlides}
        centeredSlides={props.centeredSlides}
        pagination={props.pagination}
        freeMode={props.freeMode}
        modules={[FreeMode, Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => {
          props.setTabNum(swiper.activeIndex);
        }}
      >
        {(() => {
          // child가 1개인 경우
          if (props.children.length === undefined) {
            return <SwiperSlide>{props.children}</SwiperSlide>;
          }
          // child가 0개 또는 2개 이상인 경우
          else {
            return props.children?.map((child, key) => (
              <SwiperSlide key={key}>{child}</SwiperSlide>
            ));
          }
        })()}
      </Swiper>
    </Wrapper>
  );
}

export default Carousel;

Carousel.defaultProps = {
  width: "auto",
  height: "auto",
  margin: "0px",
  padding: "0px",
  borderRadius: "0px",
  overflow: "visible",
  loop: false,
  autoplay: false,
  spaceBetween: 0,
  slidesPerView: 1,
  loopAdditionalSlides: 1,
  centeredSlides: false,
  pagination: false,
  freeMode: false,
  tabNum: undefined,
  children: [],
  setTabNum: () => {},
};

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  overflow: ${(props) => props.overflow}; ;
`;
