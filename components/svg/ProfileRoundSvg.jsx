import * as React from "react";

const SvgComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
      fill={props.color}
    />
    <circle cx="12" cy="9" r="4" fill="white" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.9248 18.9571C18.9826 19.0536 18.9649 19.1769 18.8833 19.2544C17.0904 20.956 14.6673 22 12.0004 22C9.3349 22 6.91296 20.9571 5.12038 19.2571C5.03873 19.1797 5.02096 19.0564 5.07878 18.9598C6.36824 16.8066 8.98469 15.3333 12.0026 15.3333C15.0192 15.3333 17.6347 16.8054 18.9248 18.9571Z"
      fill="white"
    />
  </svg>
);

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};
