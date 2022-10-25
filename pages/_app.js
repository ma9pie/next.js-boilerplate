import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "@/styles/fonts.scss";
import "@/styles/globals.scss";
import reset from "@/styles/reset";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtoolsWrapper>
        {typeof window !== "undefined" &&
          window.location.hostname === "localhost" && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
      </ReactQueryDevtoolsWrapper>
      <Global styles={reset}></Global>
      <Hydrate state={pageProps?.dehydrateState}>
        {getLayout(<Component {...pageProps} />)}
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

const ReactQueryDevtoolsWrapper = styled.div`
  background-color: black !important;
  color: white !important;
  & * {
    background-color: inherit;
    color: inherit;
  }
`;
