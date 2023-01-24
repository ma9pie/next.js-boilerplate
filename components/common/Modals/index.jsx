/**
 * [Title] 모달창
 * [Description] 모달창 Frame 역할을 하는 컴포넌트(Overlay, Content)
 * [Usage]
 * @props isOpen : 모달을 별고 닫는 변수
 * @props onAfterOpen : 모달이 열린 후 실행 될 함수
 * @props onRequestClose : 모달 닫기 함수.
 * Overlay 클릭 시 onRequestClose가 실행 됨
 *
 * 내부의 콘텐츠는 props.children으로 받아올 수 있고
 * 가장 많이 사용하는 AlertContents, ConfirmContents, PopupContents는
 * 컴포넌트로 구현해놓은 상태
 * 위 3개의 디자인 외 <Modal><html>....</html></Modal> 방식으로
 * 모달로 표현하고 싶은 내용을 html로 작성하여 표시할 수 있음
 */
import styled from "@emotion/styled";
import React, { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#modal");

function Modal(props) {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "var(--overlay)",
      zIndex: 999,
    },
    content: {
      top: props.top,
      left: props.left,
      right: props.right,
      bottom: props.bottom,
      margin: props.margin,
      padding: props.padding,
      minWidth: props.minWidth,
      transform: props.transform,
      overflow: "hidden",
      border: "0px",
      borderRadius: "15px",
      backgroundColor: "var(--bg)",
      zIndex: 999,
    },
  };

  return (
    <ReactModal
      contentLabel="Modal"
      style={customStyles}
      closeTimeoutMS={200}
      isOpen={props.isOpen}
      onAfterOpen={() => props.onAfterOpen()}
      onAfterClose={() => props.onAfterClose()}
      onRequestClose={() => props.onRequestClose()}
    >
      <Wrapper>{props.children}</Wrapper>
    </ReactModal>
  );
}

export default React.memo(Modal);

Modal.defaultProps = { children: () => {} };

const Wrapper = styled.div`
  overflow: hidden;
  border-radius: 15px;
`;
const Text = styled.p`
  height: 20px;
`;
