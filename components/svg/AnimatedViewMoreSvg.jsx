import { css, cx } from "@emotion/css";
import React, { useState } from "react";

const SvgComponent = (props) => {
  const [className, setClassName] = useState();

  const handleClick = () => {
    setClassName();
    setTimeout(() => {
      setClassName(animation);
    }, 0);
  };

  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      onClick={handleClick}
    >
      <rect
        x="4"
        y="4"
        width="6"
        height="6"
        rx="1"
        stroke={props.color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="4"
        y="14"
        width="6"
        height="6"
        rx="1"
        stroke={props.color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="14"
        y="14"
        width="6"
        height="6"
        rx="1"
        stroke={props.color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="14"
        y="4"
        width="6"
        height="6"
        rx="1"
        stroke={props.color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};

const animation = css`
  rect {
    fill: transparent;
    animation: view-more-svg-animation 0.1s forwards;
    opacity: 0;

    &:nth-of-type(1) {
      transform-origin: 25% 25%;
      animation-delay: 0.1s;
    }
    &:nth-of-type(4) {
      transform-origin: 75% 25%;
      animation-delay: 0.2s;
    }
    &:nth-of-type(2) {
      transform-origin: 25% 75%;
      animation-delay: 0.3s;
    }
    &:nth-of-type(3) {
      transform-origin: 75% 75%;
      animation-delay: 0.4s;
    }
  }
  @keyframes view-more-svg-animation {
    0% {
      transform: scale(0.6);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
