import styled from "@emotion/styled";
import React, { useState } from "react";
import LineInput from "@/components/common/Inputs/LineInput";

function DividedInput(props) {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  return (
    <Wrapper width={props.width}>
      <InputContainer>
        <InputWrapper flex={props.ratio.first}>
          <LineInput
            label={props.label.first}
            value={first}
            placeholder={props.placeholder.first}
            onChange={(e) => {
              setFirst(e.target.value);
              props.onChange({ ...props.value, first: e.target.value });
            }}
          ></LineInput>
        </InputWrapper>
        <InputWrapper flex={props.ratio.second}>
          <LineInput
            label={props.label.second}
            value={second}
            placeholder={props.placeholder.second}
            onChange={(e) => {
              setSecond(e.target.value);
              props.onChange({ ...props.value, second: e.target.value });
            }}
          ></LineInput>
        </InputWrapper>
      </InputContainer>
    </Wrapper>
  );
}

export default DividedInput;

DividedInput.defaultProps = {
  width: "100%",
  type: "text",
  ratio: { first: 3, second: 5 },
  label: { first: "영문 성", second: "영문 이름" },
  value: { first: "", second: "" },
  placeholder: { first: "성", second: "이름" },
  readOnly: false,
  onChange: () => {},
};

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: 79px;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;
const InputWrapper = styled.div`
  flex: ${(props) => props.flex};
`;
