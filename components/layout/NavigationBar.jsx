import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Ripple from "@/components/common/Ripple";
import BalanceSvg from "@/svg/BalanceSvg";
import HomeSvg from "@/svg/HomeSvg";
import TradeHistorySvg from "@/svg/TradeHistorySvg";
import TradeSvg from "@/svg/TradeSvg";
import ViewMoreSvg from "@/svg/ViewMoreSvg";

function NavigationBar() {
  const router = useRouter();
  const menuList = [
    { name: "홈", url: "/" },
    { name: "거래소", url: "trade" },
    { name: "자산", url: "balance" },
    { name: "거래내역", url: "tradeHistory" },
    { name: "더보기", url: "viewMore" },
  ];
  const [pathname, setPathname] = useState("/");
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (/iPhone|iPad/i.test(navigator.userAgent)) {
      setIsIOS(true);
    }
  }, []);

  useEffect(() => {
    if (router.pathname === "/") {
      setPathname("/");
    } else {
      setPathname(router.pathname.split("/")[1]);
    }
  }, [router]);

  const getSvg = (item) => {
    const color = pathname === item.url ? "var(--main)" : "var(--icon1)";

    switch (item.name) {
      case "홈":
        return <HomeSvg color={color}></HomeSvg>;
      case "거래소":
        return <TradeSvg color={color}></TradeSvg>;
      case "자산":
        return <BalanceSvg color={color}></BalanceSvg>;
      case "거래내역":
        return <TradeHistorySvg color={color}></TradeHistorySvg>;
      case "더보기":
        return <ViewMoreSvg color={color}></ViewMoreSvg>;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      {menuList.map((item, key) => (
        <LinkBox key={key} marginBottom={isIOS ? "34px" : "0px"}>
          <Link href={item.url}>
            <a>
              <Ripple>
                {(() => getSvg(item))()}
                <LinkText
                  color={pathname === item.url ? "var(--main)" : "var(--sub)"}
                >
                  {item.name}
                </LinkText>
              </Ripple>
            </a>
          </Link>
        </LinkBox>
      ))}
    </Wrapper>
  );
}

export default NavigationBar;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  min-width: 320px;
  border-top: 2px solid var(--sectionLine);
  z-index: 1;
`;

const LinkBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 6px 0px;
  margin-bottom: ${(props) => props.marginBottom};
  overflow: hidden;
  height: 49px;
  cursor: pointer;
`;
const LinkText = styled.p`
  font: var(--caption10);
  color: ${(props) => props.color};
  margin-top: 2px;
  text-align: center;
  user-select: none;
`;
