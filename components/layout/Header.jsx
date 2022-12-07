import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import Theme from "@/components/common/Theme";

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>Logo</LogoWrapper>
      <MenuContainer>
        <Link href="/">
          <a>
            <LinkBox>
              <LinkText>HOME</LinkText>
            </LinkBox>
          </a>
        </Link>
        <Link href="/" passHref>
          <a>
            <LinkBox>
              <LinkText>ABOUT</LinkText>
            </LinkBox>
          </a>
        </Link>
      </MenuContainer>
      <Theme></Theme>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0px 24px;
  background-color: var(--textBox);
  & * {
    background-color: inherit;
  }
`;
const LogoWrapper = styled.div``;
const MenuContainer = styled.nav`
  display: flex;
`;
const LinkBox = styled.div`
  padding: 8px 16px;
  cursor: pointer;
`;
const LinkText = styled.p`
  font: var(--body16);
`;
