import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Theme from "@/components/common/Theme";
import CloseSvg from "@/svg/CloseSvg";
import ViewMoreSvg from "@/svg/ViewMoreSvg";

function LaboratoryLayout(props) {
  const sidebarRef = useRef(null);
  const router = useRouter();
  const [title, setTitle] = useState("Index");
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const pageList = [
    {
      title: "Index",
      url: "/laboratory",
    },
    {
      title: "Typography",
      url: "/laboratory/typo",
    },
    {
      title: "Colors",
      url: "/laboratory/colors",
    },
    {
      title: "Buttons",
      url: "/laboratory/buttons",
    },
    {
      title: "Carousel",
      url: "/laboratory/carousel",
    },
    {
      title: "Calendar",
      url: "/laboratory/calendar",
    },
    {
      title: "Modals",
      url: "/laboratory/modals",
    },
    {
      title: "Inputs",
      url: "/laboratory/inputs",
    },
    {
      title: "CheckBox",
      url: "/laboratory/checkbox",
    },
    {
      title: "Toggle",
      url: "/laboratory/toggle",
    },
    {
      title: "Tooltips",
      url: "/laboratory/tooltips",
    },
    {
      title: "Icons",
      url: "/laboratory/icons",
    },
    {
      title: "Svg",
      url: "/laboratory/svg",
    },
    {
      title: "NavigationBar",
      url: "/laboratory/navigationBar",
    },
    {
      title: "Firebase",
      url: "/laboratory/firebase",
    },
    {
      title: "ScrollBar",
      url: "/laboratory/scrollBar",
    },
  ];

  useEffect(() => {
    const tmpTitle = router.pathname
      .split("/")
      .reverse()[0]
      .replace(/^[a-z]/, (str) => str.toUpperCase());

    if (tmpTitle === "Test") {
      setTitle("Home");
    } else {
      setTitle(tmpTitle);
    }
  }, [router]);

  const changePage = (item) => {
    setIsOpenMenu(false);
    router.push(item.url);
  };

  // 영역 외 클릭 시 사이드바 닫기
  const handleClickOutSide = (e) => {
    if (!sidebarRef.current.contains(e.target)) {
      setIsOpenMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  });

  return (
    <Wrapper>
      {/* 사이드바 */}
      <Sidebar ref={sidebarRef} left={isOpenMenu ? "0px" : "-200px"}>
        <Top>
          <CloseSvg
            width={30}
            height={30}
            onClick={() => setIsOpenMenu(false)}
          ></CloseSvg>
        </Top>
        <ListBox>
          {pageList.map((item, key) => (
            <List key={key} onClick={() => changePage(item)}>
              {item.title}
            </List>
          ))}
        </ListBox>
      </Sidebar>

      {/* Header */}
      <Top>
        <ViewMoreSvg
          width={30}
          height={30}
          color="var(--main)"
          onClick={() => setIsOpenMenu(true)}
        ></ViewMoreSvg>
        <Title>{title}</Title>
        <Theme></Theme>
      </Top>

      {/* 본문 */}
      <Content>{props.children}</Content>
    </Wrapper>
  );
}

export default LaboratoryLayout;
const Wrapper = styled.div``;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
  height: 60px;
  padding: 0px 24px;
`;
const Title = styled.h1`
  font: var(--headline24);
`;
const Content = styled.div`
  min-width: 360px;
  padding: 16px;
  margin-bottom: 200px;
  border-top: 1px solid var(--sectionLine);
`;
const Sidebar = styled.div`
  position: absolute;
  top: 0px;
  left: ${(props) => props.left};
  width: 200px;
  height: 100vh;
  z-index: 20;
  background-color: var(--textBox);
  border: 1px solid var(--sectionLine);
  transition: left 0.2s ease;
  & * {
    background-color: inherit;
  }
`;
const ListBox = styled.div`
  padding: 24px 0px;
`;
const List = styled.p`
  font: var(--body18);
  cursor: pointer;
  padding: 4px 24px;
  transition: background-color 0.1s ease;
  &:hover {
    background-color: var(--disabled);
  }
`;
