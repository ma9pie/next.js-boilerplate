import Head from "next/head";
import React from "react";

function HeadComponent(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Head>
  );
}

export default HeadComponent;

HeadComponent.defaultProps = {
  title: "Next.js - boilerplate",
  description: "빠른 프로젝트 시작을 위한 나만의 보일러 플레이트 입니다.",
};
