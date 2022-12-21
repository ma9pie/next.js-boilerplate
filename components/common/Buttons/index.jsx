import { css, cx } from "@emotion/css";
import styled from "@emotion/styled";
import React from "react";

const Buttons = (props) => {
  // disabled button
  if (props.disabled) {
    return (
      <Button
        {...props}
        disabled
        backgroundColor="var(--disabled)"
        pressedBackgroundColor="var(--disabled)"
        cursor="auto"
      >
        {props.children}
      </Button>
    );
  }
  // sub button
  else if (props.type === "sub") {
    return (
      <Button
        {...props}
        color="var(--main)"
        border="1px solid var(--sectionLine)"
        backgroundColor="var(--textBox)"
        pressedBackgroundColor="var(--pressedSubBtn)"
      >
        {props.children}
      </Button>
    );
  }
  // main button
  else {
    return <Button {...props}>{props.children}</Button>;
  }
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
  pressedBackgroundColor: "var(--pressedMainBtn)",
  cursor: "pointer",
  onClick: () => {},
};

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
  text-align: center;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  cursor: ${(props) => props.cursor};
  &:active {
    background-color: ${(props) => props.pressedBackgroundColor};
  }
`;
