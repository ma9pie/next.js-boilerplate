import styled from "@emotion/styled";
import Axios from "axios";
import React, { useEffect } from "react";
import CommonLayoput from "@/layouts/CommonLayout";

function Home() {
  useEffect(() => {
    Axios.get("/api/test").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <Wrapper>
      {Array(3)
        .fill()
        .map((item, key) => (
          <Test key={key}>index</Test>
        ))}
    </Wrapper>
  );
}
const Wrapper = styled.div``;

export default Home;

Home.getLayout = function getLayout(page) {
  return <CommonLayoput>{page}</CommonLayoput>;
};

const Test = styled.div`
  font: var(--headline24);
`;

// :root {
//   // Headings
//   --headline24: 500 24px/26px NotoSansKR;
//   --headline20: 500 20px/22px NotoSansKR;
//   --headline18: 500 18px/22px NotoSansKR;
//   --headline16: 500 16px/22px NotoSansKR;

//   // Body
//   --body20: 400 20px/140% NotoSansKR;
//   --body18: 400 18px/140% NotoSansKR;
//   --body16: 400 16px/140% NotoSansKR;
//   --body14: 400 14px/140% NotoSansKR;

//   // Meta
//   --label14: 500 14px/120% NotoSansKR;
//   --label12: 500 12px/120% NotoSansKR;
//   --caption12: 500 12px/120% NotoSansKR;
//   --caption10: 500 10px/120% NotoSansKR;
// }
