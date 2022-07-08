import { FeedLayout, MainLayout } from "components/Layouts";
import { Container } from "components/ui";

const Profile = () => {
  return (
    // 🎏 Note the Header component is inside the FeedLayout component.
    <FeedLayout pageTitle="Profile">
      <Container>
        <div className="text-white">Profile</div>
      </Container>
    </FeedLayout>
  );
};

Profile.Layout = MainLayout;
export default Profile;
