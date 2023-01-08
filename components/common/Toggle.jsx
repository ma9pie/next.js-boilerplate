/**
 * [Title] 토글
 * [Description] input태그의 checkbox 기능을 하는 토글 컴포넌트,
 * [Usage]
 * @props id : 토글의 아이디(토글마다 다르게 설정해야 함)
 * @props width : 토글의 너비
 * @props height : 토글의 높이
 * @props toggleOffBackground : off 상태의 토글 배경
 * @props toggleOnBackground : on 상태의 토글 배경
 * @props sliderMargin : 슬라이더와 토글 테두리 사이의 간격
 * @props sliderColor : 슬라이더(동그라미)의 색
 *
 * sliderMargin값이 0일때 토글의 높이 === 슬라이더의 지름
 *
 * [Ex]
 * height="40px", sliderMargin="2px"일 경우
 * 슬라이더의 지름은 "36px"
 */
import styled from "@emotion/styled";
import React from "react";

const Toggle = (props) => {
  return (
    <Container>
      <ToggleBox
        {...props}
        id={props.id}
        type="checkbox"
        onChange={() => {
          props.onChange(!props.checked);
        }}
        checked={props.checked}
      ></ToggleBox>
      <Slider {...props} htmlFor={props.id}></Slider>
    </Container>
  );
};

export default React.memo(Toggle);

Toggle.defaultProps = {
  id: "checkbox1", // 체크박스 id
  width: "48px", // 토글 너비
  height: "24px", // 토글 높이
  margin: "0px", // 토글 마진
  padding: "0px", // 토글 패딩
  toggleOffBackground: "var(--disabled)", // off 상태의 토글 배경
  toggleOnBackground: "var(--brandColor)", // on 상태의 토글 배경
  sliderMargin: "1px", // 슬라이더와 토글 테두리 사이의 간격
  sliderColor: "#ffffff", // 슬라이더 색
  checked: false,
  onChange: () => {},
};
const Container = styled.div`
  position: relative;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;
const ToggleBox = styled.input`
  opacity: 0;
  z-index: 1;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0px;
  &:checked + label {
    background: ${(props) => props.toggleOnBackground};
    &::after {
      margin-left: ${(props) =>
        `calc(${props.width} - ${props.height} + ${props.sliderMargin})`};
    }
  }
`;
const Slider = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.height};
  background: ${(props) => props.toggleOffBackground};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: ${(props) =>
      `calc(${props.height} - ${props.sliderMargin} - ${props.sliderMargin})`};
    height: ${(props) =>
      `calc(${props.height} - ${props.sliderMargin} - ${props.sliderMargin})`};
    margin: ${(props) => props.sliderMargin};
    background: ${(props) => props.sliderColor};
    transition: 0.2s;
  }
`;
