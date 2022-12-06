import styled from "@emotion/styled";
import Image from "next/image";
import React, { useState } from "react";

function BoxInput(props) {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Wrapper width={props.width}>
      <Label>{props.label}</Label>
      <InputBox
        borderColor={isFocus ? "var(--brandColor)" : "transparent"}
        backgroundColor={
          props.disabled ? "var(--disableBtn)" : "var(--textBox)"
        }
      >
        <Input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={value}
          disabled={props.disabled}
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
        {props.iconSrc && (
          <ImageBox>
            <Image src={props.iconSrc} alt="icon"></Image>
          </ImageBox>
        )}
      </InputBox>
    </Wrapper>
  );
}

export default BoxInput;

BoxInput.defaultProps = {
  width: "100%",
  readOnly: false,
  label: "LABEL",
  type: "text",
  value: "",
  placeholder: "placeholder",
  disabled: false,
  onChange: () => {},
};

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: 71px;
`;
const Label = styled.div`
  font: var(--label14);
  height: 17px;
  margin-bottom: 2px;
`;
const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
  border-width: 1.5px;
  border-style: solid;
  border-color: ${(props) => props.borderColor};
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  & * {
    background-color: inherit;
  }
`;
const Input = styled.input`
  font: var(--body14);
  width: 100%;
  height: 52px;
  caret-color: var(--brandColor);
`;
const ImageBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
