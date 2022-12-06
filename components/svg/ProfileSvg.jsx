import * as React from "react";

const SvgComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.7294 20.4471C19.2736 19.1713 18.2692 18.0439 16.872 17.2399C15.4749 16.4358 13.763 16 12.002 16C10.2409 16 8.52902 16.4358 7.13186 17.2399C5.73471 18.0439 4.73035 19.1713 4.27455 20.4471"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="12.002"
      cy="8"
      r="4"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};
