import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GoogleAnalyticsUtils from "@/utils/GoogleAnalyticsUtils";
import "@/styles/app.scss";

function App({ Component, pageProps }) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);

  const [queryClient] = useState(() => new QueryClient());

  // 구글 애널리틱스 조회수 측정
  useEffect(() => {
    const handleRouteChange = (url) => {
      GoogleAnalyticsUtils.changeRouteGtag(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtoolsWrapper>
        {typeof window !== "undefined" &&
          window.location.hostname === "localhost" && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
      </ReactQueryDevtoolsWrapper>
      <Hydrate state={pageProps?.dehydrateState}>
        {getLayout(<Component {...pageProps} />)}
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;

const ReactQueryDevtoolsWrapper = styled.div`
  background-color: black !important;
  color: white !important;
  & * {
    background-color: inherit;
    color: inherit;
  }
`;
