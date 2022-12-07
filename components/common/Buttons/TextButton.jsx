import styled from "@emotion/styled";
import React from "react";

function TextButton(props) {
  return (
    <Text
      color={props.type === "sub" ? "var(--sub)" : "var(--blue500)"}
      onClick={props.onClick}
    >
      {props.children}
    </Text>
  );
}

export default TextButton;

TextButton.defaultProps = {
  onClick: () => {},
};

const Text = styled.span`
  font: var(--body14);
  color: ${(props) => props.color};
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
`;
