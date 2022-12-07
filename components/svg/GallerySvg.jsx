import * as React from "react";

const SvgComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.17157 4.67097C3 5.84254 3 7.72816 3 11.4994V13.4994C3 17.2706 3 19.1562 4.17157 20.3278C5.34315 21.4994 7.22876 21.4994 11 21.4994H13C16.7712 21.4994 18.6569 21.4994 19.8284 20.3278C21 19.1562 21 17.2706 21 13.4994V11.4994C21 8.75725 21 7.01204 20.5496 5.81337V16.9994C19.6852 16.9994 18.8562 16.656 18.245 16.0448L17.5685 15.3683L17.5685 15.3683L17.5685 15.3683C17.0523 14.8521 16.7943 14.594 16.5185 14.4514C15.9422 14.1533 15.2571 14.1533 14.6808 14.4514C14.405 14.594 14.1469 14.8521 13.6307 15.3683L13.5289 15.4701C13.097 15.902 12.8811 16.1179 12.6633 16.1931C12.3262 16.3095 11.9526 16.2376 11.6828 16.0043C11.5085 15.8536 11.3883 15.5729 11.1477 15.0115L11.0996 14.8994C10.5319 13.5746 10.248 12.9122 9.80711 12.5892C9.32371 12.235 8.70693 12.1162 8.12654 12.2656C7.59724 12.4018 7.08766 12.9113 6.06851 13.9305L4.34961 15.6494V4.50659C4.28845 4.55865 4.22915 4.61339 4.17157 4.67097Z"
      fill={props.color}
    />
    <path
      d="M4 11.5C4 9.58611 4.00212 8.25129 4.13753 7.24416C4.26907 6.26579 4.50966 5.7477 4.87868 5.37868C5.2477 5.00966 5.76579 4.76907 6.74416 4.63753C7.75129 4.50212 9.08611 4.5 11 4.5H13C14.9139 4.5 16.2487 4.50212 17.2558 4.63753C18.2342 4.76907 18.7523 5.00966 19.1213 5.37868L19.8112 4.68882L19.1213 5.37868C19.4903 5.7477 19.7309 6.26579 19.8625 7.24416C19.9979 8.25129 20 9.58611 20 11.5V13.5C20 15.4139 19.9979 16.7487 19.8625 17.7558C19.7309 18.7342 19.4903 19.2523 19.1213 19.6213C18.7523 19.9903 18.2342 20.2309 17.2558 20.3625C16.2487 20.4979 14.9139 20.5 13 20.5H11C9.08611 20.5 7.75129 20.4979 6.74416 20.3625C5.76579 20.2309 5.2477 19.9903 4.87868 19.6213L4.18882 20.3112L4.87868 19.6213C4.50966 19.2523 4.26907 18.7342 4.13753 17.7558C4.00212 16.7487 4 15.4139 4 13.5V11.5Z"
      stroke={props.color}
      strokeWidth="2"
    />
    <circle cx="14.7004" cy="9.8" r="1.8" fill={props.color} />
  </svg>
);

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};