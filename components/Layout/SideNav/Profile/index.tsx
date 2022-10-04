import Image from "next/image";
import React from "react";
import { ProfileWrapper, ImageWrapper, Title, Text } from "./Profile.styles";

const Profile = () => {
  return (
    <ProfileWrapper>
      <ImageWrapper>
        <Image
          src="/images/me.png"
          alt="my profile"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/images/me.png"
        />
      </ImageWrapper>
      <Title>Eunnbi</Title>
      <Text>Frontend Developer</Text>
    </ProfileWrapper>
  );
};

export default React.memo(Profile);
