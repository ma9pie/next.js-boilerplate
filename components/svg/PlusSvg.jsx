import * as React from "react";

const SvgComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#clip0_419_81)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9997 6C12.4731 6 12.8569 6.38376 12.8569 6.85714V17.1429C12.8569 17.6162 12.4731 18 11.9997 18C11.5263 18 11.1426 17.6162 11.1426 17.1429V6.85714C11.1426 6.38376 11.5263 6 11.9997 6Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 12C18 12.4734 17.6162 12.8571 17.1429 12.8571H6.85714C6.38376 12.8571 6 12.4734 6 12C6 11.5266 6.38376 11.1429 6.85714 11.1429H17.1429C17.6162 11.1429 18 11.5266 18 12Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_419_81">
        <rect width="12" height="12" fill="white" transform="translate(6 6)" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};
