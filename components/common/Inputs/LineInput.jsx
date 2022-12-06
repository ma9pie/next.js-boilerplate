import styled from "@emotion/styled";
import React, { useState } from "react";

function LineInput(props) {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const lineColor = () => {
    if (props.errorMsg) {
      return "var(--red100)";
    } else if (props.status === "SUCCESS") {
      return "var(--green100)";
    } else if (isFocus) {
      return "var(--brandColor)";
    } else {
      return "var(--sectionLine)";
    }
  };

  return (
    <Wrapper width={props.width}>
      <Label>{props.label}</Label>
      <Input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={value}
        readOnly={props.readOnly}
        onChange={(e) => {
          setValue(e.target.value);
          props.onChange(e);
        }}
        onFocus={() => {
          if (!props.readOnly) {
            setIsFocus(true);
          }
        }}
        onBlur={() => {
          if (!props.readOnly) {
            setIsFocus(false);
          }
        }}
      ></Input>
      <Line backgroundColor={lineColor}></Line>
      <ErrorMsg>{props.errorMsg}</ErrorMsg>
    </Wrapper>
  );
}

export default LineInput;

LineInput.defaultProps = {
  width: "100%",
  readOnly: false,
  label: "LABEL",
  type: "text",
  value: "",
  placeholder: "placeholder",
  errorMsg: "",
  onChange: () => {},
};

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: 79px;
`;
const Label = styled.div`
  font: var(--label14);
  height: 17px;
  margin-bottom: 7px;
`;
const Input = styled.input`
  font: var(--body16);
  width: 100%;
  margin-bottom: 10px;
  caret-color: var(--brandColor);
`;
const Line = styled.div`
  height: 2px;
  margin-bottom: 4px;
  background-color: ${(props) => props.backgroundColor};
`;
const ErrorMsg = styled.p`
  font: var(--label12);
  color: var(--red100);
`;
