import { css, cx } from "@emotion/css";
import styled from "@emotion/styled";
import React from "react";

function TextButton(props) {
  return (
    <Wrapper
      className={props.type === "sub" ? cx(sub) : cx(main)}
      onClick={props.onClick}
    >
      {props.children}
    </Wrapper>
  );
}

export default TextButton;

TextButton.defaultProps = {
  onClick: () => {},
};

const main = css`
  color: var(--brandColor);
`;

const sub = css`
  color: var(--sub);
`;

const Wrapper = styled.span`
  font: var(--body14);
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
`;
