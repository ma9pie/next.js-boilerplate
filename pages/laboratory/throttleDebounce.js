import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import useThrottle from "@/hooks/useThrottle";

function ThrottleDebounce() {
  const [throttledValue, setThrottledValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [password, setPassword] = useState("");

  const handleThrottle = useThrottle((e) => {
    console.log(e.target.value);
  }, 300);

  const handleDebounce = useDebounce((e) => {
    console.log(e.target.value);
  }, 300);

  const handlePassword = useDebounce((e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  });

  return (
    <Wrapper>
      <Input
        value={throttledValue}
        placeholder="throttle"
        onChange={(e) => {
          setThrottledValue(e.target.value);
          handleThrottle(e);
        }}
      ></Input>
      <Input
        value={debouncedValue}
        placeholder="debounce"
        onChange={(e) => {
          setDebouncedValue(e.target.value);
          handleDebounce(e);
        }}
      ></Input>
      <Input onChange={handlePassword}></Input>
    </Wrapper>
  );
}

export default ThrottleDebounce;

const Wrapper = styled.div`
  padding: 200px;
`;
const Input = styled.input`
  display: block;
`;
