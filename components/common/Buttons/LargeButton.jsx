import React from "react";
import Button from "@/components/common/Buttons";

function LargeButton(props) {
  const styles = {
    font: "var(--headline16)",
    width: "100%",
    height: "56px",
    borderRadius: "12px",
  };
  return <Button {...styles} {...props}></Button>;
}

export default LargeButton;
