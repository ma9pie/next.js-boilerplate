import * as React from "react";

const SvgComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M13.3506 3.26822L19.3073 5.73826C19.7275 5.91251 20 6.31229 20 6.75463V12.5631C20 14.7058 18.9305 16.7165 17.1285 17.9619L13.3285 20.5881C12.5338 21.1373 11.4662 21.1373 10.6715 20.5881L6.87151 17.9619C5.06948 16.7165 4 14.7058 4 12.5631V6.75463C4 6.31229 4.27245 5.91251 4.69266 5.73826L10.6494 3.26822C11.5119 2.91059 12.4881 2.91059 13.3506 3.26822Z"
      fill={props.color}
    />
  </svg>
);

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};
