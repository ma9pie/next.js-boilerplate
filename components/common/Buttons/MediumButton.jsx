import React from "react";
import Button from "@/components/common/Buttons";

function MediumButton(props) {
  const styles = {
    font: "var(--label12)",
    width: "151px",
    height: "40px",
  };
  return <Button {...styles} {...props}></Button>;
}

export default MediumButton;
