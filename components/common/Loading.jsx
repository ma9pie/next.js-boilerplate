import styled from "@emotion/styled";
import React from "react";

function Loading(props) {
  return <Wrapper {...props}></Wrapper>;
}

export default Loading;

Loading.defaultProps = {
  width: "30px",
  height: "30px",
  margin: "auto",
};

const Wrapper = styled.div`
  position: relative;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: 3px solid var(--brandColor);
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
