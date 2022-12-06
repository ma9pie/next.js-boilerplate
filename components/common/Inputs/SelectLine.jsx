import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import ModalUtils from "@/utils/ModalUtils";
import CheckSvg from "@/svg/CheckSvg";
import ChevronSvg from "@/svg/ChevronSvg";

function SelectLine(props) {
  return (
    <Wrapper width={props.width}>
      <Label>{props.label}</Label>
      <InputContainer>
        <Input
          name={props.name}
          placeholder={props.placeholder}
          value={props.value.name}
          readOnly={true}
          onClick={() => {
            ModalUtils.openBottomSheet({
              title: props.label,
              component: () => {
                return (
                  <SelectContent
                    list={props.list}
                    value={props.value}
                    setValue={props.setValue}
                  ></SelectContent>
                );
              },
            });
          }}
        ></Input>
        <Icon>
          <ChevronSvg type="down" fill="var(--icon1)"></ChevronSvg>
        </Icon>
      </InputContainer>
      <Line></Line>
    </Wrapper>
  );
}

function SelectContent(props) {
  const ListContainer = styled.div``;
  const ListBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    cursor: pointer;
  `;
  const List = styled.div``;

  const isSelected = (item) => {
    if (item.name === props.value.name && item.value === props.value.value) {
      return true;
    } else {
      return false;
    }
  };

  const selectValue = (item) => {
    props.setValue(item);
    ModalUtils.closeBottomSheet();
  };

  return (
    <ListContainer>
      {props.list.map((item, key) => (
        <ListBox key={key} onClick={() => selectValue(item)}>
          <List>{item.name}</List>
          {isSelected(item) && <CheckSvg></CheckSvg>}
        </ListBox>
      ))}
    </ListContainer>
  );
}

export default SelectLine;

SelectLine.defaultProps = {
  width: "100%",
  label: "LABEL",
  value: { name: "", value: "" },
  placeholder: "placeholder",
  limit: 10,
  list: [],
  setValue: () => {},
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
  cursor: pointer;
`;
const Input = styled.input`
  font: var(--body16);
  width: 100%;
  margin-bottom: 10px;
  caret-color: var(--brandColor);
  cursor: pointer;
`;
const Icon = styled.div``;
const Line = styled.div`
  height: 2px;
  margin-bottom: 4px;
  background-color: var(--sectionLine);
`;
