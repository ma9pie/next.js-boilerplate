import { css, cx } from "@emotion/css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import React from "react";

function Tooltips(props) {
  return (
    <Tooltip
      placement={props.placement}
      trigger={props.trigger}
      animation={props.animation}
      overlay={props.component}
      overlayClassName={overlayClass}
      onClick={props.onClick}
    >
      {props.children || <></>}
    </Tooltip>
  );
}

export default Tooltips;

Tooltips.defaultProps = {
  placement: "bottom",
  trigger: "click",
  animation: "zoom",
  onClick: () => {},
  component: () => <p>message</p>,
};

const overlayClass = css`
  background-color: transparent;
  opacity: 1;
  .rc-tooltip-content {
    border-radius: 6px;
  }
  .rc-tooltip-arrow {
    background-color: transparent;
    z-index: 1;
  }
  .rc-tooltip-inner {
    padding: 8px;
    min-height: 20px;
    filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.15));
    background-color: var(--textBox);
    & * {
      background-color: inherit;
    }
  }

  &.rc-tooltip-placement-top,
  &.rc-tooltip-placement-topLeft,
  &.rc-tooltip-placement-topRight {
    .rc-tooltip-arrow {
      border-top-color: var(--textBox);
    }
  }
  &.rc-tooltip-placement-bottom,
  &.rc-tooltip-placement-bottomLeft,
  &.rc-tooltip-placement-bottomRight {
    .rc-tooltip-arrow {
      border-bottom-color: var(--textBox);
    }
  }
  &.rc-tooltip-placement-left,
  &.rc-tooltip-placement-leftTop,
  &.rc-tooltip-placement-leftBottom {
    .rc-tooltip-arrow {
      border-left-color: var(--textBox);
    }
  }
  &.rc-tooltip-placement-right,
  &.rc-tooltip-placement-rightTop,
  &.rc-tooltip-placement-rightBottom {
    .rc-tooltip-arrow {
      border-right-color: var(--textBox);
    }
  }
`;
