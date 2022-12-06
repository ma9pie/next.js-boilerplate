import { css, cx } from "@emotion/css";
import styled from "@emotion/styled";
import React, { useState } from "react";
import ReactModal from "react-modal";
import CloseSvg from "@/svg/CloseSvg";

ReactModal.setAppElement("#bottom-sheet");

function BottomSheet(props) {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "var(--overlay)",
      zIndex: 999,
      overscrollBehavior: "contain",
    },
    content: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: props.height,
      padding: "0px",
      border: "0px",
      borderRadius: "25px 25px 0px 0px",
      backgroundColor: "var(--bg)",
      zIndex: 999,
      overscrollBehavior: "contain",
    },
  };

  return (
    <ReactModal
      id="test"
      contentLabel="Modal"
      closeTimeoutMS={200}
      isOpen={props.isOpen}
      style={customStyles}
      className={props.isOpen ? open : close}
      onAfterOpen={() => props.onAfterOpen()}
      onAfterClose={() => props.onAfterClose()}
      onRequestClose={() => props.onRequestClose()}
    >
      <Wrapper>
        <Top>
          <BlankBox></BlankBox>
          <Title>{props.title}</Title>
          <CloseSvgWrapper onClick={() => props.onRequestClose()}>
            <CloseSvg></CloseSvg>
          </CloseSvgWrapper>
        </Top>
        <Content>{props.component()} </Content>
      </Wrapper>
    </ReactModal>
  );
}

export default React.memo(BottomSheet);

BottomSheet.defaultProps = {
  height: "auto",
  component: () => {},
};

const open = css`
  animation: open-bottom-sheet 0.2s ease forwards;
  @keyframes open-bottom-sheet {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;

const close = css`
  animation: close-bottom-sheet 0.2s ease forwards;
  @keyframes close-bottom-sheet {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(100%);
    }
  }
`;
const Wrapper = styled.div`
  border-radius: 25px 25px 0px 0px;
  padding: 36px 24px;
  max-height: 100vh;
  /* overscroll-behavior: contain; */
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
const BlankBox = styled.div`
  width: 16px;
`;
const Title = styled.p`
  font: var(--headline18);
`;
const CloseSvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 18px;
  cursor: pointer;
`;
const Content = styled.div`
  padding-right: 8px;
  // 전체높이 - top영역 - 아래쪽 여백
  max-height: calc(100vh - 82px - 32px);
  overflow: scroll;
`;
