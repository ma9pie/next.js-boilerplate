import * as React from "react";

const SvgComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
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

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};
