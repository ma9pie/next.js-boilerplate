import styled from "@emotion/styled";
import React, { useState } from "react";

function LimitInput(props) {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const lineColor = () => {
    if (isFocus) {
      return "var(--brandColor)";
    } else {
      return "var(--sectionLine)";
    }
  };

  const checkTextlimit = (e) => {
    if (e.target.value.length <= props.limit) {
      setValue(e.target.value);
      props.onChange(e);
    }
  };

  return (
    <Wrapper width={props.width}>
      <Label>{props.label}</Label>
      <InputContainer>
        <Input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={value}
          readOnly={props.readOnly}
          onChange={checkTextlimit}
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
        <Limit>{`${value.length}/${props.limit}`}</Limit>
      </InputContainer>

      <Line backgroundColor={lineColor}></Line>
    </Wrapper>
  );
}

export default LimitInput;

LimitInput.defaultProps = {
  width: "100%",
  readOnly: false,
  label: "LABEL",
  type: "text",
  value: "",
  placeholder: "placeholder",
  limit: 10,
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
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  font: var(--body16);
  width: 100%;
  margin-bottom: 10px;
  caret-color: var(--brandColor);
`;
const Limit = styled.div``;
const Line = styled.div`
  height: 2px;
  margin-bottom: 4px;
  background-color: ${(props) => props.backgroundColor};
`;
