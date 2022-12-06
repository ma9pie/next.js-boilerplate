import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import BoxInput from "@/components/common/Inputs/BoxInput";
import DividedInput from "@/components/common/Inputs/DividedInput";
import LimitInput from "@/components/common/Inputs/LimitInput";
import LineInput from "@/components/common/Inputs/LineInput";
import SearchInput from "@/components/common/Inputs/SearchInput";
import SelectBox from "@/components/common/Inputs/SelectBox";
import SelectLine from "@/components/common/Inputs/SelectLine";
import TestLayout from "@/layouts/ComponentsLayout";
import QrCodeSvg from "@/svg/QrCodeSvg";
import SwitchSvg from "@/svg/SwitchSvg";

function Components() {
  const [lineInput, setLineInput] = useState("");
  const [limitInput, setLimitInput] = useState("");
  const [dividedInput, setDividedInput] = useState({ first: "", second: "" });
  const [selectLineInput, setSelectLineInput] = useState({
    name: "",
    value: "",
  });
  const [boxInput, setBoxInput] = useState("");
  const [selectBoxInput, setSelectBoxInput] = useState({
    name: "",
    value: "",
  });
  const [searchWord, setSearchWord] = useState("");

  return (
    <Wrapper>
      <Category>Line</Category>
      <Container>
        <Title>LineInput</Title>
        <StateBox>
          <State>lineInput : {lineInput}</State>
        </StateBox>
        <LineInput
          label="아이디"
          value={lineInput}
          placeholder="아이디를 입력해주세요."
          onChange={(e) => setLineInput(e.target.value)}
        ></LineInput>
        <LineInput
          label="비밀번호"
          value={lineInput}
          placeholder="비밀번호를 입력해주세요."
          errorMsg={lineInput.length < 10 ? "10자 이상 입력해주세요." : ""}
          onChange={(e) => setLineInput(e.target.value)}
        ></LineInput>
      </Container>

      <Container>
        <Title>LimitInput</Title>
        <StateBox>
          <State>limitInput : {limitInput}</State>
        </StateBox>
        <LimitInput
          label="지갑주소 별칭"
          value={limitInput}
          placeholder="지갑주소 별칭을 입력해주세요."
          onChange={(e) => setLimitInput(e.target.value)}
        ></LimitInput>
      </Container>

      <Container>
        <Title>DividedInput</Title>
        <StateBox>
          <State>dividedInput : {JSON.stringify(dividedInput)}</State>
        </StateBox>
        <DividedInput
          label={{ first: "영문 성", second: "영문 이름" }}
          value={dividedInput}
          placeholder={{ first: "성", second: "이름" }}
          onChange={(obj) => setDividedInput(obj)}
        ></DividedInput>
      </Container>

      <Container>
        <Title>SelectLine</Title>
        <StateBox>
          <State>selectLineInput</State>
          <Json>{JSON.stringify(selectLineInput, null, 4)}</Json>
        </StateBox>
        <SelectLine
          label="직업 구분"
          value={selectLineInput}
          setValue={setSelectLineInput}
          list={[
            { name: "프론트엔드", value: "FRONTEND" },
            { name: "백엔드", value: "BACKEND" },
            { name: "디자이너", value: "DISIGNER" },
            { name: "기획자", value: "PLANNER" },
            { name: "QA", value: "QA" },
          ]}
          placeholder="직업을 선택해주세요."
        ></SelectLine>
      </Container>

      <Category>Box</Category>
      <Container>
        <Title>BoxInput</Title>
        <StateBox>
          <State>boxInput : {boxInput}</State>
        </StateBox>
        <BoxInput
          label="출금 주소"
          value={boxInput}
          placeholder="출금 주소를 입력해주세요"
          onChange={(e) => setBoxInput(e.target.value)}
        ></BoxInput>
        <BoxInput
          label="출금 주소"
          value={boxInput}
          placeholder="출금 주소를 입력해주세요"
          iconSrc={QrCodeSvg}
          onChange={(e) => setBoxInput(e.target.value)}
        ></BoxInput>
        <BoxInput
          disabled={true}
          label="출금 주소"
          value={boxInput}
          placeholder="출금 주소를 입력해주세요"
          iconSrc={SwitchSvg}
          onChange={(e) => setBoxInput(e.target.value)}
        ></BoxInput>
      </Container>

      <Container>
        <Title>SelectLine</Title>
        <StateBox>
          <State>selectBoxInput</State>
          <Json>{JSON.stringify(selectBoxInput, null, 4)}</Json>
        </StateBox>
        <SelectBox
          label="거래 자금의 원천"
          value={selectBoxInput}
          setValue={setSelectBoxInput}
          list={[
            { name: "근로소득", value: "1" },
            { name: "사업소득", value: "2" },
            { name: "금융소득", value: "3" },
            { name: "퇴직소득", value: "4" },
            { name: "양도소득", value: "5" },
          ]}
          placeholder="자금 원천을 선택해주세요."
          iconSrc={SwitchSvg}
        ></SelectBox>
      </Container>

      <Container>
        <Title>SearchInput</Title>
        <StateBox>
          <State>searchWord : {searchWord}</State>
        </StateBox>
        <SearchInput
          value={searchWord}
          placeholder="자산 검색"
          onChange={(e) => setSearchWord(e.target.value)}
        ></SearchInput>
      </Container>
    </Wrapper>
  );
}

export default Components;

Components.getLayout = function getLayout(page) {
  return <TestLayout>{page}</TestLayout>;
};

const Wrapper = styled.div`
  padding: 16px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid var(--main);
  border-radius: 15px;
  padding: 16px;
  margin-bottom: 24px;
`;
const Category = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 16px;
`;
const Title = styled.p`
  font: var(--headline18);
  font-weight: 700;
`;
const StateBox = styled.div`
  margin-top: 8px;
`;
const State = styled.p`
  margin-bottom: 8px;
`;
const Json = styled.pre``;
