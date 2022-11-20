import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
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
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => {
          props.setTabNum(swiper.activeIndex);
        }}
      >
        {props.children[0] &&
          props.children?.map((child, key) => (
            <SwiperSlide key={key}>{child}</SwiperSlide>
          ))}
      </Swiper>
    </Wrapper>
  );
}

export default Carousel;

Carousel.defaultProps = {
  loop: false,
  autoplay: false,
  spaceBetween: 0,
  slidesPerView: 1,
  loopAdditionalSlides: 1,
  width: "auto",
  tabNum: 0,
  children: [],
  setTabNum: () => {},
};

const Wrapper = styled.div`
  width: ${(props) => props.width};
`;
