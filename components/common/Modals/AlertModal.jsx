import styled from "@emotion/styled";
import React, { useCallback, useEffect } from "react";
import ReactModal from "react-modal";
// import Button from "@/components/common/Buttons";
import Modal from "@/components/common/Modals";
import ControlUtils from "@/utils/ControlUtils";

ReactModal.setAppElement("#alert-modal");

function AlertModal(props) {
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
            backgroundColor="var(--brandColor)"
            onClick={() => {
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

export default React.memo(AlertModal);

AlertModal.defaultProps = {};

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
`;
const Button = styled.div`
  font: var(--label12);
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: var(--yellowBtn);
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
`;
