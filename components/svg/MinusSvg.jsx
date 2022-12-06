import * as React from "react";

const SvgComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#clip0_419_82)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 12C18 12.5523 17.6162 13 17.1429 13H6.85714C6.38376 13 6 12.5523 6 12C6 11.4477 6.38376 11 6.85714 11L17.1429 11C17.6162 11 18 11.4477 18 12Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_419_82">
        <rect width="12" height="2" fill="white" transform="translate(6 11)" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};
