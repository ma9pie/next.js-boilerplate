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
      <path
        d="M21 6L15.7071 11.2929C15.3166 11.6834 14.6834 11.6834 14.2929 11.2929L12.7071 9.70711C12.3166 9.31658 11.6834 9.31658 11.2929 9.70711L7 14"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H21"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
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
  path:nth-of-type(1) {
    fill: transparent;
    stroke-dasharray: 19;
    animation: trade-svg-animation 0.5s;
  }
  @keyframes trade-svg-animation {
    from {
      stroke-dashoffset: 19;
    }
    to {
      stroke-dashoffset: 38;
    }
  }
`;
