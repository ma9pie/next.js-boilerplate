import * as React from "react";

const SvgComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.89613 2L9.35129 3.66912L6.99201 6.37531H18.9132C20.6181 6.37531 22.0001 7.96055 22.0001 9.91605C22.0001 10.5679 21.5394 11.0963 20.9711 11.0963C20.4029 11.0963 19.9422 10.5679 19.9422 9.91605C19.9422 9.26422 19.4815 8.7358 18.9132 8.7358H6.99201L9.35129 11.442L7.89613 13.1111L3.05273 7.55556L7.89613 2Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.1509 10.8889L15.694 12.558L18.0561 15.2642L5.09052 15.2642C4.52157 15.2642 4.06035 14.7358 4.06035 14.084C4.06035 13.4321 3.59912 12.9037 3.03017 12.9037C2.46123 12.9037 2 13.4321 2 14.084C2 16.0395 3.38367 17.6247 5.09052 17.6247L18.0561 17.6247L15.694 20.3309L17.1509 22L22 16.4445L17.1509 10.8889Z"
      fill={props.color}
    />
  </svg>
);

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};
