import * as React from "react";

const SvgComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2137 5.44023C20.1065 6.14366 20.2622 7.44048 19.5615 8.33676L11.9961 18.0133C11.0388 19.2377 9.22747 19.3382 8.14166 18.2272L4.58808 14.591C3.79325 13.7776 3.80569 12.4715 4.61587 11.6736C5.42604 10.8757 6.72716 10.8882 7.52199 11.7015L9.84649 14.08L16.3283 5.78939C17.029 4.89311 18.3208 4.73679 19.2137 5.44023Z"
      fill={props.color}
    />
  </svg>
);

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};
