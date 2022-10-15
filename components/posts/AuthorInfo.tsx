import Image from "next/image";
import styled from "styled-components";
import { NextImageWrapper } from "../common/NextImageWrapper.styled";
import MyInfoLinks from "../myinfo/MyInfoLinks";

const AuthorInfo = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="/images/profile.png" layout="fill" />
      </ImageWrapper>
      <Column>
        <Author>
          Written by <span>@eunnbi</span>
        </Author>
        <MyInfoLinks />
      </Column>
    </Wrapper>
  );
};

export default AuthorInfo;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  svg {
    font-size: 1.4rem;
  }
`;

const ImageWrapper = styled(NextImageWrapper)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Author = styled.p`
  font-weight: 500;
  span {
    font-weight: bold;
  }
`;
