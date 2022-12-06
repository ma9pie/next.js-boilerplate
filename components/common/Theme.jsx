import styled from "@emotion/styled";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { commonActions } from "@/redux/modules/common";
import CookieUtils from "@/utils/CookieUtils";
import moon from "@/images/moon.svg";
import sun from "@/images/sun.svg";

const Theme = (props) => {
  // const dispatch = useDispatch();
  // const commonState = useSelector((state) => state.common);

  const [colorType, setColorType] = useState("RED-GREEN");

  // 다크 모드
  const setDark = useCallback(() => {
    CookieUtils.set("theme", "Dark", {
      "max-age": 60 * 60 * 24 * 365,
    });
    document.documentElement.setAttribute("data-theme", "Dark");
    localStorage.setItem("theme", "Dark");
    // dispatch(commonActions.setTheme("Dark"));
  }, []);

  // 라이트 모드
  const setLight = useCallback(() => {
    CookieUtils.set("theme", "Light", {
      "max-age": 60 * 60 * 24 * 365,
    });
    document.documentElement.setAttribute("data-theme", "Light");
    localStorage.setItem("theme", "Light");
    // dispatch(commonActions.setTheme("Light"));
  }, []);

  // 적/녹 모드
  const setRedGreenMode = () => {
    localStorage.setItem("color", "RED-GREEN");
    document.documentElement.setAttribute("data-color", "RED-GREEN");
    setColorType("RED-GREEN");
  };

  // 적/청 모드
  const setRedBlueMode = () => {
    localStorage.setItem("color", "RED-BLUE");
    document.documentElement.setAttribute("data-color", "RED-BLUE");
    setColorType("RED-BLUE");
  };

  // 테마 변경
  const toggleTheme = () => {
    // if (commonState.theme === "Dark") {
    //   setLight();
    // } else {
    //   setDark();
    // }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "Light") {
      setLight();
    } else {
      setDark();
    }
  }, [setDark, setLight]);

  return (
    <Wrapper {...props} onClick={toggleTheme}>
      {/* {commonState.theme === "Light" && (
        <Image src={sun} alt="theme_icon" width={30} height={30}></Image>
      )}
      {commonState.theme === "Dark" && (
        <Image src={moon} alt="theme_icon" width={30} height={30}></Image>
      )} */}
    </Wrapper>
  );
};

export default Theme;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  cursor: pointer;
`;
