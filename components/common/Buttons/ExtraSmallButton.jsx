import React from "react";
import Button from "@/components/common/Buttons";

function ExtraSmallButton(props) {
  const styles = {
    font: "var(--caption10)",
    width: "56px",
    height: "24px",
  };
  return <Button {...styles} {...props}></Button>;
}

export default ExtraSmallButton;
