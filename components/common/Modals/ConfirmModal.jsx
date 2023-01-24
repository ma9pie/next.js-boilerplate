import styled from "@emotion/styled";
import React, { useCallback, useEffect } from "react";
import ReactModal from "react-modal";
import Modal from "@/components/common/Modals";
import ControlUtils from "@/utils/ControlUtils";

ReactModal.setAppElement("#confirm-modal");

function ConfirmModal(props) {
  const { doubleClickPrevention } = new Object(ControlUtils);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  const onKeyDown = (e) => {
    if (e.key === "Enter" && props.isOpen) {
      props.onRequestClose();
      props.onAfterClose();
    }
  };

  return (
    <Modal contentLabel="AlertModal" {...props}>
      <Wrapper>
        <Top>
          <Title> {props.title}</Title>
        </Top>
        <Content>
          {props.component()}
          {props.message &&
            props.message
              .split("\n")
              .map((text, idx) => <Text key={idx}>{text}</Text>)}
        </Content>
        <ButtonBox>
          <Button
            color="var(--main)"
            backgroundColor="var(--textBox)"
            onClick={() => {
              doubleClickPrevention(() => props.onRequestCancle(), 200);
              props.onRequestClose();
            }}
          >
            {props.cancleBtnText}
          </Button>
          <Button
            backgroundColor="var(--brandColor)"
            onClick={() => {
              doubleClickPrevention(() => props.onRequestConfirm(), 200);
              props.onRequestClose();
            }}
          >
            {props.confirmBtnText}
          </Button>
        </ButtonBox>
      </Wrapper>
    </Modal>
  );
}

export default React.memo(ConfirmModal);

ConfirmModal.defaultProps = {};

const Wrapper = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font: var(--headline20);
  white-space: nowrap;
  margin-top: 32px;
`;
const Content = styled.div`
  font: var(--body14);
  text-align: center;
  max-height: 1000px;
  overflow: overlay;
  transition: color ease-in-out 0.3s;
  margin: 16px 16px 32px 16px;
`;
const Text = styled.p`
  height: 20px;
`;
const ButtonBox = styled.div`
  display: flex;
  height: 50px;
`;
const Button = styled.div`
  font: var(--label12);
  width: 100%;
  line-height: 46px;
  text-align: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => `2px solid ${props.backgroundColor}`};
  cursor: pointer;
`;
