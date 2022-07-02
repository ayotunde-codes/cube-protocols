import { Dumbbell } from "components/icons";
import { Container } from "components/ui";
import Head from "next/head";

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {/* <Login /> */}
        <Dumbbell />
      </Container>
    </div>
  );
}

export default Home;