import { css, cx } from "@emotion/css";
import styled from "@emotion/styled";
import React from "react";
import Ripple from "@/components/common/Ripple";

const Buttons = (props) => {
  return (
    <Wrapper {...props}>
      <Ripple type={props.type}>
        {(() => {
          if (props.disabled) {
            return (
              <Button
                {...props}
                backgroundColor="var(--disabled)"
                cursor="auto"
              >
                <Children>{props.children}</Children>
              </Button>
            );
          } else if (props.type === "sub") {
            return (
              <Button {...props} backgroundColor="var(--textBox)">
                <Children>{props.children}</Children>
              </Button>
            );
          } else {
            return (
              <Button {...props}>
                <Children>{props.children}</Children>
              </Button>
            );
          }
        })()}
      </Ripple>
    </Wrapper>
  );
};

export default Buttons;

Buttons.defaultProps = {
  font: "var(--body16)",
  width: "100%",
  height: "56px",
  margin: "0px",
  padding: "0px",
  border: "0px",
  borderRadius: "5px",
  color: "white",
  backgroundColor: "var(--blue700)",
  cursor: "pointer",
  disabled: false,
  onClick: () => {},
};

const Wrapper = styled.span`
  position: relative;
  overflow: hidden;
  background-color: transparent;
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
`;

const Button = styled.button`
  font: ${(props) => props.font};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.fontHeight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  cursor: ${(props) => props.cursor};
  text-align: center;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  &:hover {
  }
`;
const Children = styled.div`
  z-index: 1;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
