import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import ExtraSmallButton from "@/components/common/Buttons/ExtraSmallButton";
import LargeButton from "@/components/common/Buttons/LargeButton";
import TextButton from "@/components/common/Buttons/TextButton";
import LineInput from "@/components/common/Inputs/LineInput";
import Loading from "@/components/common/Loading";
import ComponentsLayout from "@/layouts/ComponentsLayout";
import ModalUtils from "@/utils/ModalUtils";
import Axios from "@/api/index";

function Components() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState({ id: "", password: "", name: "" });

  useEffect(() => {
    getAllUsers();
  }, []);

  // 전체 유저 조회
  const getAllUsers = async () => {
    Axios.get("/api/user").then((res) => {
      setUsers(res.data);
    });
  };

  // 유저 생성
  const createUser = () => {
    if (inputs.id === "") {
      return ModalUtils.openToastPopup({
        type: "error",
        message: "아이디를 입력해주세요.",
      });
    }
    if (inputs.password === "") {
      return ModalUtils.openToastPopup({
        type: "error",
        message: "패스워드를 입력해주세요.",
      });
    }
    if (inputs.name === "") {
      return ModalUtils.openToastPopup({
        type: "error",
        message: "닉네임을 입력해주세요.",
      });
    }

    setIsLoading(true);
    Axios.post("/api/user", inputs).then((res) => {
      setIsLoading(false);
      if (res.data.success) {
        ModalUtils.openToastPopup({
          type: "success",
          message: "아이디가 생성되었습니다.",
        });
        setInputs({ id: "", password: "", name: "" });
        getAllUsers();
      }
    });
  };

  // 유저 삭제
  const deleteUser = (user) => {
    ModalUtils.openConfirm({
      message: "해당 유저를 삭제하시겠습니까?",
      onRequestConfirm: () => {
        Axios.delete("/api/user", { data: { key: user.key } }).then((res) => {
          if (res.data.success) {
            ModalUtils.openToastPopup({
              type: "success",
              message: "아이디가 삭제되었습니다.",
            });
            getAllUsers();
          }
        });
      },
    });
  };

  // 전체 유저 삭제
  const deleteAllUsers = () => {
    ModalUtils.openConfirm({
      message: "전체 유저를 삭제하시겠습니까?",
      onRequestConfirm: () => {
        Promise.all(
          users.map((user) => {
            Axios.delete("/api/user", { data: { key: user.key } });
          })
        ).then((res) => {
          ModalUtils.openToastPopup({
            type: "success",
            message: "전체 유저를 삭제하였습니다.",
          });
          getAllUsers();
        });
      },
    });
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <Wrapper>
      <InputContainer>
        <LineInput
          label="아이디"
          name="id"
          value={inputs.id}
          placeholder="아이디를 입력해주세요."
          onChange={handleInputs}
        ></LineInput>
        <LineInput
          label="비밀번호"
          name="password"
          value={inputs.password}
          placeholder="비밀번호를 입력해주세요."
          onChange={handleInputs}
        ></LineInput>
        <LineInput
          label="닉네임"
          name="name"
          value={inputs.name}
          placeholder="닉네임을 입력해주세요."
          onChange={handleInputs}
        ></LineInput>
      </InputContainer>

      <LargeButton onClick={createUser} disabled={isLoading}>
        {isLoading ? <Loading color="white"></Loading> : "유저 생성하기"}
      </LargeButton>

      <Table>
        <Row>
          <Column>id</Column>
          <Column>password</Column>
          <Column>name</Column>
          <Column>
            <TextButton onClick={() => deleteAllUsers()}>전체 삭제</TextButton>
          </Column>
        </Row>
        {users.map((item, key) => (
          <Row key={key}>
            <Column>{item.id}</Column>
            <Column>{item.password}</Column>
            <Column>{item.name}</Column>
            <Column>
              <ExtraSmallButton onClick={() => deleteUser(item)}>
                삭제
              </ExtraSmallButton>
            </Column>
          </Row>
        ))}
      </Table>
    </Wrapper>
  );
}

export default Components;

Components.getLayout = function getLayout(page) {
  return <ComponentsLayout>{page}</ComponentsLayout>;
};

const Wrapper = styled.div`
  padding: 16px;
`;
const InputContainer = styled.div`
  display: grid;
  gap: 8px;
`;
const Table = styled.div`
  width: 100%;
  margin: 40px 0px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:nth-of-type(n + 1):nth-of-type(-n + 3) {
    flex: 10;
  }
  &:nth-of-type(4) {
    flex: 7;
  }
`;
