import styled from "@emotion/styled";
import React from "react";
import Button from "@/components/common/Buttons";

function BottomButton(props) {
  const styles = {
    font: "var(--headline16)",
    width: "100%",
    height: "56px",
    borderRadius: "12px",
  };
  return (
    <Wrapper>
      <Button {...styles} {...props}></Button>
    </Wrapper>
  );
}

export default BottomButton;

const Wrapper = styled.div`
  position: fixed;
  bottom: 16px;
  left: 0px;
  width: calc(100% - 48px);
  margin: 0px 24px;
  z-index: 10;
  border-radius: 12px;
  overflow: hidden;
`;
