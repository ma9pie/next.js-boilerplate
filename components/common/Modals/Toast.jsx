import { css, cx } from "@emotion/css";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  Bounce,
  Flip,
  Slide,
  ToastContainer,
  Zoom,
  cssTransition,
  toast,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad/i.test(navigator.userAgent)) {
      setIsIOS(true);
    }
  }, []);

  const customCSS = cssTransition({
    enter: openToast,
    exit: closeToast,
    collapse: false,
  });

  return (
    <Wrapper bottom={isIOS ? "60px" : "26px"}>
      <ToastContainer
        transition={customCSS}
        autoClose={2000}
        closeButton={false}
        hideProgressBar={true}
        pauseOnHover={true}
        pauseOnFocusLoss={false}
        closeOnClick={true}
        newestOnTop={true}
        className={className}
        bodyClassName={bodyClassName}
        toastClassName={toastClassName}
        progressClassName={progressClassName}
        draggable={true}
        draggablePercent={50}
        limit={1}
      ></ToastContainer>
    </Wrapper>
  );
}

export default React.memo(Toast);

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  left: 0px;
  bottom: ${(props) => props.bottom};
  width: 100%;
  height: 100vh;
  z-index: 999;
  pointer-events: none;
  background-color: transparent;
  & * {
    background-color: transparent;
  }
`;
const className = css`
  position: static;
  width: 340px;
`;
const bodyClassName = css`
  display: flex;
  padding: 0px;
  margin: 0px;
`;
const toastClassName = css`
  min-height: 0px;
  margin: 0px;
  padding: 0px;
  border-radius: 15px;
  background-color: var(--toast) !important;
  backdrop-filter: blur(5px);
  pointer-events: auto;
`;
const progressClassName = css``;
const openToast = css`
  animation: open-toast 0.2s ease;
  @keyframes open-toast {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
const closeToast = css`
  animation: close-toast 0.1s ease;
  @keyframes close-toast {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.7);
      opacity: 0;
    }
  }
`;
