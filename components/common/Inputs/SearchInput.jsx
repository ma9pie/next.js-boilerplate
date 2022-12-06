import styled from "@emotion/styled";
import React, { useState } from "react";
import DeleteSvg from "@/svg/DeleteSvg";
import SearchSvg from "@/svg/SearchSvg";

function SearchInput(props) {
  const [value, setValue] = useState("");

  return (
    <Wrapper width={props.width}>
      <InputContainer>
        <Icon>
          <SearchSvg></SearchSvg>
        </Icon>

        <Input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            props.onChange(e);
          }}
        ></Input>
        {value && (
          <Icon
            onClick={(e) => {
              setValue("");
              props.onChange(e);
            }}
          >
            <DeleteSvg></DeleteSvg>
          </Icon>
        )}
      </InputContainer>
    </Wrapper>
  );
}

export default SearchInput;

SearchInput.defaultProps = {
  width: "100%",
  label: "LABEL",
  type: "text",
  value: "",
  placeholder: "placeholder",
  onChange: () => {},
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  height: 40px;
  padding: 0px 16px;
  border: 1.5px solid var(--brandColor);
  border-radius: 5px;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Input = styled.input`
  font: var(--body16);
  width: 100%;
  margin: 0px 8px;
  caret-color: var(--brandColor);
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
