import styled from "@emotion/styled";
import React from "react";

function CheckBox(props) {
  if (props.disabled) {
    return <Disalbed {...props}></Disalbed>;
  }

  return (
    <Wrapper
      {...props}
      onClick={() => {
        props.onClick(!props.checked);
      }}
    >
      {props.checked ? (
        <Check {...props}></Check>
      ) : (
        <UnChecked {...props}></UnChecked>
      )}
    </Wrapper>
  );
}

const Check = (props) => (
  <svg
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 0C2.68629 0 0 2.68629 0 6V14C0 17.3137 2.68629 20 6 20H14C17.3137 20 20 17.3137 20 14V6C20 2.68629 17.3137 0 14 0H6ZM15.3835 6.87133C15.8003 6.41669 15.7696 5.71029 15.3149 5.29353C14.8603 4.87678 14.1539 4.90749 13.7371 5.36213L8.27254 11.3235L5.73532 9.63201C5.22215 9.28989 4.52881 9.42856 4.1867 9.94173C3.84458 10.4549 3.98325 11.1482 4.49642 11.4904L8.62586 14.2433L15.3835 6.87133Z"
      fill="var(--brandColor)"
    />
  </svg>
);

export default CheckBox;

CheckBox.defaultProps = {
  width: "20px",
  height: "20px",
  margin: "0px",
  disabled: false,
  onClick: () => {},
};
const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: transparent;
  border-radius: 6px;
  cursor: pointer;
`;
const UnChecked = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid var(--icon1);
  border-radius: 6px;
`;
const Disalbed = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: var(--disabled);
  border-radius: 6px;
`;
