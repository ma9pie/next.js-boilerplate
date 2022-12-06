import * as React from "react";

const SvgComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="4" y="4" width="8" height="16" rx="1" fill="var(--red500)" />
    <rect x="13" y="4" width="7" height="4.70588" rx="1" fill={props.color} />
    <rect
      x="13"
      y="9.64706"
      width="7"
      height="4.70588"
      rx="1"
      fill={props.color}
    />
    <rect
      x="13"
      y="15.2941"
      width="7"
      height="4.70588"
      rx="1"
      fill={props.color}
    />
  </svg>
);

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};
