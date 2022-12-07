import styled from "@emotion/styled";
import ControlBox from "@/components/Counter/ControlBox";
import Viewer from "@/components/Counter/Viewer";

const Counter = () => {
  return (
    <Wrapper>
      <ControlBox></ControlBox>
      <Viewer></Viewer>
    </Wrapper>
  );
};

export default Counter;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 300px 0px;
`;
