import styled from "@emotion/styled";
import React from "react";
import ModalUtils from "@/utils/ModalUtils";
import CheckSvg from "@/svg/CheckSvg";

function SelectBox(props) {
  return (
    <Wrapper width={props.width}>
      <Label>{props.label}</Label>
      <BoxContainer
        backgroundColor={
          props.disabled ? "var(--disableBtn)" : "var(--textBox)"
        }
      >
        <Box
          value={props.value.name}
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
        >
          {props.value.name ? props.value.name : props.placeholder}
        </Box>
        {props.iconSrc && <ImageBox>{props.iconSrc}</ImageBox>}
      </BoxContainer>
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

export default SelectBox;

SelectBox.defaultProps = {
  width: "100%",
  label: "LABEL",
  value: { name: "", value: "" },
  placeholder: "placeholder",
  limit: 10,
  list: [],
  disabled: false,
  setValue: () => {},
};

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: 71px;
`;
const Label = styled.div`
  font: var(--label14);
  height: 17px;
  margin-bottom: 7px;
`;
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 52px;
  padding: 0px 16px;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  & * {
    background-color: inherit;
  }
`;
const Box = styled.div`
  font: var(--body14);
  display: flex;
  align-items: center;
  width: 100%;
  caret-color: var(--brandColor);
`;
const ImageBox = styled.div`
  display: flex;
  align-items: center;
`;
