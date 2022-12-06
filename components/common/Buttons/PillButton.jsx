import React from "react";
import Button from "@/components/common/Buttons";

function PillButton(props) {
  const styles = {
    font: "var(--caption10)",
    width: "44px",
    height: "20px",
    borderRadius: "999px",
  };
  return <Button {...styles} {...props}></Button>;
}

export default PillButton;
