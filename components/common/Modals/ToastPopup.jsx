import { css, cx } from "@emotion/css";
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import InfoSvg from "@/svg/InfoSvg";
import SuccessSvg from "@/svg/SuccessSvg";
import WarningSvg from "@/svg/WarningSvg";

function ToastPopup(props) {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad/i.test(navigator.userAgent)) {
      setIsIOS(true);
    }
  }, []);

  const getSvg = useCallback((type) => {
    switch (type) {
      case "success":
        return (
          <SuccessSvg
            width="24px"
            height="24px"
            color="var(--green400)"
          ></SuccessSvg>
        );
      case "error":
        return (
          <WarningSvg
            width="24px"
            height="24px"
            color="var(--red400)"
          ></WarningSvg>
        );
      case "etc":
        return <InfoSvg width="24px" height="24px" color="white"></InfoSvg>;
      default:
        return null;
    }
  }, []);

  return (
    <Wrapper bottom={isIOS ? "60px" : "26px"}>
      <Content
        className={
          props.isOpen === null
            ? cx(HideToastPopup)
            : props.isOpen
            ? cx(OpenToastPopup)
            : cx(CloseToastPopup)
        }
        onClick={() => props.onRequestClose()}
      >
        <SvgWrapper>{getSvg(props.type)}</SvgWrapper>
        <TextBox>
          {props.message?.split("\n").map((message, key) => (
            <Text key={key}>{message}</Text>
          ))}
        </TextBox>
      </Content>
    </Wrapper>
  );
}

export default React.memo(ToastPopup);

ToastPopup.defaultProps = {
  type: "success",
  isOpen: null,
  onRequestClose: () => {},
};

const OpenToastPopup = css`
  animation: open-toast-popup 0.2s ease forwards;
  @keyframes open-toast-popup {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
const CloseToastPopup = css`
  animation: close-toast-popup 0.1s ease forwards;
  @keyframes close-toast-popup {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0);
    }
  }
`;
const HideToastPopup = css`
  visibility: hidden;
`;
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
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 340px;
  margin: 0px;
  padding: 16px;
  border-radius: 15px;
  background-color: var(--toast) !important;
  backdrop-filter: blur(5px);
  pointer-events: auto;
  cursor: pointer;
`;
const SvgWrapper = styled.div``;
const TextBox = styled.div``;
const Text = styled.p`
  font: var(--body14);
  color: white;
`;
