import {
  FeedLayout,
  FeedRightTabWrapper,
  MainLayout,
} from "components/Layouts";
import { Container } from "components/ui";
import Image from "next/image";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import defaultBanner from "../images/userBanner.svg";
// import defaultBanner from "../images/defaultBanner.png";
import defaultPfpImage from "public/images/defaultpfp.svg";
import s from "../styles/pages/Profile.module.css";

const Profile = () => {
  const { user } = useMoralis();
  return (
    // 🎏 Note the Header component is inside the FeedLayout component.
    <FeedRightTabWrapper>
      <FeedLayout pageTitle="Profile">
        <div className={s.profileBanner}>
          <Image
            src={
              user.attributes?.banner ? user.attributes?.banner : defaultBanner
            }
            alt="profile"
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <div className="pfpContainer">
          <Container>
            <div className={s.profilePfp}>
              <Image
                src={defaultPfpImage}
                // src={
                //   user.attributes?.pfp ? user.attributes?.pfp : defaultPfpImage
                // }
                alt="profile"
                layout="responsive"
              />
            </div>
            <div className="profileName">
              {user.attributes.username.slice(0, 6)}
            </div>
            <div className="profileWallet">{`${user.attributes.ethAddress.slice(
              0,
              4
            )}...
            ${user.attributes.ethAddress.slice(38)}`}</div>
            <Link href="/settings">
              <div className="profileEdit">Edit profile</div>
            </Link>
            <div className="profileBio">{user.attributes.bio}</div>
            <div className="profileTabs">
              <div className="profileTab">Your Tweets</div>
            </div>
          </Container>
        </div>
      </FeedLayout>
    </FeedRightTabWrapper>
  );
};

Profile.Layout = MainLayout;
export default Profile;
