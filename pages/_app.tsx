import { AppProps } from "next/app";
import { FC, PropsWithChildren } from "react";
import "@assets/main.css";
import { MoralisProvider } from "react-moralis";
import { EnsureProtectRoute } from "hooks";

const Noop: FC<PropsWithChildren> = ({ children }) => <>{children}</>;
function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<PropsWithChildren> } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <MoralisProvider
      appId="chkqQQDcegC08WHcdZSKLSIZ3A0kc1WZSyCdrRAh"
      serverUrl="https://mzcuquzwglx2.usemoralis.com:2053/server"
      // appId="ArgEurp6lmhndCV6LyrspZul7JyNRJal0q1cnllP"
      // serverUrl="https://je3tfqn7dodg.usemoralis.com:2053/server"
    >
      {/* 🌈 EnsureProtectRoute ensures protected routes 😅😅😃 */}
      <EnsureProtectRoute>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </EnsureProtectRoute>
    </MoralisProvider>
  );
}

export default MyApp;
