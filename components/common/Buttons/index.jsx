import { css, cx } from "@emotion/css";
import styled from "@emotion/styled";
import React from "react";

const Buttons = (props) => {
  return (
    <Wrapper>
      {props.type === "sub" ? (
        <SubButton
          className={props.disabled ? cx(disabledStyles) : cx(activeSub)}
          onClick={props.onClick}
          {...props}
        >
          {props.children}
        </SubButton>
      ) : (
        <MainButton
          className={props.disabled ? cx(disabledStyles) : cx(activeMain)}
          onClick={props.onClick}
          {...props}
        >
          {props.children}
        </MainButton>
      )}
    </Wrapper>
  );
};

export default Buttons;

Buttons.defaultProps = {
  width: "100%",
  height: "56px",
  margin: "0px",
  padding: "0px",
  font: "var(--body16)",
  onClick: () => {},
};

const activeMain = css`
  color: var(--yellowBtn);
  background-color: var(--brandColor);
  cursor: pointer;
  &:active {
    background-color: var(--pressedBtnMain);
  }
`;

const activeSub = css`
  color: var(--main);
  background-color: var(--bg);
  border: 1px solid var(--sectionLine);
  cursor: pointer;
  &:active {
    background-color: var(--pressedBtnSub);
  }
`;

const disabledStyles = css`
  color: var(--sub);
  background-color: var(--disableBtn);
  border: 0px;
`;

const Wrapper = styled.div``;

const MainButton = styled.button`
  font: ${(props) => props.font};
  ${(props) => props.fontStyles};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.fontHeight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: 0px;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "5px"};
  text-align: center;
  white-space: nowrap;
`;

const SubButton = styled.button`
  font: ${(props) => props.font};
  ${(props) => props.fontStyles};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.fontHeight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "5px"};
  text-align: center;
  white-space: nowrap;
`;
