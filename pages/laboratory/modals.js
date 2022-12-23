import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import MediumButton from "@/components/common/Buttons/MediumButton";
import ComponentsLayout from "@/layouts/ComponentsLayout";
import ModalUtils from "@/utils/ModalUtils";

function Components() {
  return (
    <Wrapper>
      <Title>Alert</Title>
      <ButtonBox>
        <MediumButton
          onClick={() => {
            ModalUtils.openAlert({
              title: "Alert",
              message: "Alert message",
              confirmBtnText: "확인",
              onAfterOpen: () => {
                console.log("onAfterOpen");
              },
              onAfterClose: () => {
                console.log("onAfterClose");
              },
            });
          }}
        >
          Alert
        </MediumButton>
        <MediumButton
          onClick={() => {
            ModalUtils.openAlert({
              component: () => {
                return <TestComponent></TestComponent>;
              },
            });
          }}
        >
          Component Alert
        </MediumButton>
      </ButtonBox>

      <Title>Confirm</Title>
      <ButtonBox>
        <MediumButton
          onClick={() => {
            ModalUtils.openConfirm({
              title: "Confirm",
              message: "Confirm message",
              cancleBtnText: "취소",
              confirmBtnText: "확인",
              onAfterOpen: () => {
                console.log("onAfterOpen");
              },
              onAfterClose: () => {
                console.log("onAfterClose");
              },
              onRequestConfirm: () => {
                console.log("onRequestConfirm");
              },
              onRequestCancle: () => {
                console.log("onRequestCancle");
              },
            });
          }}
        >
          Confirm
        </MediumButton>
        <MediumButton
          onClick={() => {
            ModalUtils.openConfirm({
              component: () => {
                return <TestComponent></TestComponent>;
              },
            });
          }}
        >
          Component Confirm
        </MediumButton>
      </ButtonBox>

      <Title>Toast</Title>
      <ButtonBox>
        <MediumButton
          onClick={() => {
            ModalUtils.openToastPopup({
              type: "error",
              message: "상품 정보가 존재하지 않습니다.",
            });
          }}
        >
          Error Toast
        </MediumButton>
        <MediumButton
          onClick={() => {
            ModalUtils.openToastPopup({
              type: "success",
              message: "장바구니에 등록되었습니다.",
            });
          }}
        >
          Success Toast
        </MediumButton>
      </ButtonBox>
      <ButtonBox>
        <MediumButton
          onClick={() => {
            ModalUtils.openToastPopup({
              type: "etc",
              message: "로그인 후 이용해주세요.",
            });
          }}
        >
          Etc Toast
        </MediumButton>
        <MediumButton
          onClick={() => {
            ModalUtils.openToastPopup({
              type: "error",
              message: `해당 이벤트는 종료된 이벤트 입니다.\n 공지사항을 확인해주세요.`,
            });
          }}
        >
          Message 2 lines Toast
        </MediumButton>
      </ButtonBox>
      <Title>BottomSheet</Title>
      <ButtonBox>
        <MediumButton
          onClick={() => {
            ModalUtils.openBottomSheet();
          }}
        >
          BottomSheet
        </MediumButton>
        <MediumButton
          onClick={() => {
            ModalUtils.openBottomSheet({
              component: () => {
                return <TestComponent></TestComponent>;
              },
            });
          }}
        >
          Component BottomSheet
        </MediumButton>
      </ButtonBox>
    </Wrapper>
  );
}

const TestComponent = () => {
  const TextBox = styled.div`
    border-radius: 10px;
    overflow: hidden;
    padding: 16px;
    background-color: var(--textBox);
    & * {
      background-color: inherit;
    }
  `;
  const Text = styled.p`
    font: var(--body14);
  `;

  return (
    <TextBox>
      <Text>내용 1</Text>
      <Text>내용 2</Text>
      <Text>내용 3</Text>
      <Text>내용 4</Text>
    </TextBox>
  );
};

export default Components;

Components.getLayout = function getLayout(page) {
  return <ComponentsLayout>{page}</ComponentsLayout>;
};

const Wrapper = styled.div`
  padding: 16px;
`;
const Title = styled.h2`
  font: var(--headline24);
  margin-bottom: 8px;
`;
const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;
