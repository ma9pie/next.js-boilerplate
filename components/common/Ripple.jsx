import styled from "@emotion/styled";
import React, { useState } from "react";

function Ripple(props) {
  const [rippleArray, setRippleArray] = useState([]);

  const createRipple = (e) => {
    const rippleContainer = e.currentTarget.getBoundingClientRect();

    const { width, height } = rippleContainer;

    const diameter = Math.sqrt(width * width + height * height);

    const x = (width - diameter) / 2;
    const y = (height - diameter) / 2;

    const ripple = {
      x,
      y,
      diameter,
    };

    setRippleArray([...rippleArray, ripple]);
  };

  const deleteRipple = () => {
    setRippleArray([]);
  };

  return (
    <Wrapper
      backgroundColor={props.type === "sub" ? "" : "var(--blue400)"}
      onMouseDown={createRipple}
      onMouseUp={deleteRipple}
      onMouseLeave={deleteRipple}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.diameter,
                height: ripple.diameter,
              }}
            />
          );
        })}
      <Children>{props.children}</Children>
    </Wrapper>
  );
}

export default Ripple;

Ripple.defaultProps = {};

const Wrapper = styled.div`
  background-color: transparent;
  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    background-color: ${(props) => props.backgroundColor};
    animation: ripple 0.1s ease forwards;
  }
  @keyframes ripple {
    from {
      transform: scale(0.5);
    }
    to {
      transform: scale(1);
    }
  }
`;

const Children = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: transparent;
  & * {
    background-color: inherit;
  }
`;
