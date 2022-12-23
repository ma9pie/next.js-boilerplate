import styled from "@emotion/styled";
import React, { useEffect, useLayoutEffect, useState } from "react";

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

function Ripple(props) {
  const { duration, color } = props;
  const [rippleArray, setRippleArray] = useState([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const createRipple = (e) => {
    const rippleContainer = e.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;

    const { width, height } = rippleContainer;

    const x = (width - size) / 2;
    const y = (height - size) / 2;

    const ripple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, ripple]);
  };

  return (
    <Wrapper duration={duration} color={color} onMouseDown={createRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
      <Children>{props.children}</Children>
    </Wrapper>
  );
}

export default Ripple;

Ripple.defaultProps = {
  duration: 200,
  color: "var(--textBox)",
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${(props) => props.color};
    animation-name: ripple;
    animation-duration: ${(props) => props.duration}ms;
  }

  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale(0.8);
    }
    to {
      opacity: 0;
      transform: scale(3);
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
