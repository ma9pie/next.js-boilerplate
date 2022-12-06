import React from "react";
import Button from "@/components/common/Buttons";

function SmallButton(props) {
  const styles = {
    font: "var(--label12)",
    width: "62px",
    height: "40px",
  };
  return <Button {...styles} {...props}></Button>;
}

export default SmallButton;
