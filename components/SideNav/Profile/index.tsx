import { ProfileWrapper, Image, Title, Text } from "./Profile.styles";

const Profile = () => {
  return (
    <ProfileWrapper>
      <Image src="images/me.png" alt="my profile" />
      <Title>Eunnbi</Title>
      <Text>Frontend Developer</Text>
    </ProfileWrapper>
  );
};

export default Profile;
