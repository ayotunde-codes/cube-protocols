import { AppProps } from "next/app";
import { FC, PropsWithChildren } from "react";
import "@assets/main.css";
import { MoralisProvider } from "react-moralis";

const Noop: FC<PropsWithChildren> = ({ children }) => <>{children}</>;
function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<PropsWithChildren> } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <MoralisProvider
      appId="ArgEurp6lmhndCV6LyrspZul7JyNRJal0q1cnllP"
      serverUrl="https://je3tfqn7dodg.usemoralis.com:2053/server"
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoralisProvider>
  );
}

export default MyApp;
