import { AppProps } from "next/app";
import { FC, PropsWithChildren } from "react";
import "@assets/main.css";
import { MoralisProvider } from "react-moralis";
import { EnsureProtectRoute } from "hooks";

import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const Noop: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<PropsWithChildren> } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <MoralisProvider
      appId={process.env.APP_ID}
      serverUrl={process.env.SERVER_URL}
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
