import { AuthLayout, LoginWrapper } from "components/Login";
import Head from "next/head";

function Home() {
  return (
    <div>
      <Head>
        <title>Cube Protocol</title>
        <meta name="description" content="login or signup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginWrapper>
        <AuthLayout
          text={`Join millions of Blockchain enthusiast all over the globe to share what's happening in the world of Blockchain, Connect and learn more about the crypto space and thus earn.`}
        />
      </LoginWrapper>
    </div>
  );
}

export default Home;
