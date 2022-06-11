import styled from "styled-components";

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.3);
  border: 2px solid #fff;
`;

const ProfileName = styled.h1`
  color: white;
  font-weight: bold;
  letter-spacing: 5px;
  font-size: 50px;
  text-align: center;
  margin: 10px 0;
`;

const ProfileInfo = styled.p`
  color: white;
  font-size: 23px;
  text-align: center;
`;

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileImg src="images/me.jpg" alt="my profile" />
      <ProfileName>Eunnbi</ProfileName>
      <ProfileInfo>Frontend Developer</ProfileInfo>
    </ProfileWrapper>
  );
};

export default Profile;
