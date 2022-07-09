import { LoginFrame, LoginWrapper } from "components/Login";
import { Button, Input } from "components/ui";
import { useMoralis } from "react-moralis";
import pfps from "components/pfp";
import Image, { StaticImageData } from "next/image";
import Head from "next/head";
import { useUserDataUpdate } from "hooks";

const Setup = () => {
  const {
    username,
    saveEdits,
    updateSelectedPfp,
    updateUsername,
    defaultpfp,
    loading,
  } = useUserDataUpdate();

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="login or signup" />
      </Head>
      <LoginWrapper>
        <LoginFrame>
          <div className="flex items-center pb-2 font-medium flex-col">
            <h2 className=" text-xl text-pup">Setup Account</h2>
            <p className=" text-white text-lg font-medium">
              Choose a username and profile picture
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={({ target: { value } }) => updateUsername(value)}
            />
          </div>
          {/* TODO Avatar section */}

          <div>
            <div className="flex flex-col gap-2 w-full items-center my-3">
              <div className=" w-1/5">
                <Image
                  src={defaultpfp()}
                  layout="responsive"
                  width={50}
                  height={50}
                />
              </div>
              <p className=" text-pup text-sm font-normal">
                Select Image from your file
              </p>
            </div>
            <div className="flex gap-2 justify-center">
              {pfps.map((pfp: StaticImageData | string, index: number) => (
                <div
                  key={`pfp${index}`}
                  className="w-1/6 rounded-full"
                  onClick={() => updateSelectedPfp(pfps[index])}
                >
                  <Image
                    src={pfp}
                    alt="pfp"
                    layout="responsive"
                    className="w-full rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className=" px-12 pt-10">
            <Button text="Finish" loading={loading} onClick={saveEdits} />
          </div>
        </LoginFrame>
      </LoginWrapper>
    </>
  );
};

// 🍾 you have done well 🍾 🎊

export default Setup;
