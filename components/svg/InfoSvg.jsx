import * as React from "react";

const SvgComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.6C8.46538 5.6 5.6 8.46538 5.6 12C5.6 15.5346 8.46538 18.4 12 18.4C15.5346 18.4 18.4 15.5346 18.4 12C18.4 8.46538 15.5346 5.6 12 5.6ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
      fill={props.color}
    />
    <path
      d="M12.3996 8.4C12.3996 8.62091 12.2205 8.8 11.9996 8.8C11.7787 8.8 11.5996 8.62091 11.5996 8.4C11.5996 8.17909 11.7787 8 11.9996 8C12.2205 8 12.3996 8.17909 12.3996 8.4Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.1992 8.39998C11.1992 7.95815 11.5574 7.59998 11.9992 7.59998C12.441 7.59998 12.7992 7.95815 12.7992 8.39998C12.7992 8.8418 12.441 9.19998 11.9992 9.19998C11.5574 9.19998 11.1992 8.8418 11.1992 8.39998Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9992 10.4C12.441 10.4 12.7992 10.7582 12.7992 11.2V15.2C12.7992 15.6419 12.441 16 11.9992 16C11.5574 16 11.1992 15.6419 11.1992 15.2V11.2C11.1992 10.7582 11.5574 10.4 11.9992 10.4Z"
      fill={props.color}
    />
  </svg>
);

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};
