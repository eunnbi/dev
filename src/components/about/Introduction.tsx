import Image from "next/image";
import styled from "styled-components";

export default function Introduction() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          alt="강은비 프로필 미모티콘"
          src="/images/profile.png"
          fill
          priority
          sizes="100px"
          className="profile-image"
        />
      </ImageWrapper>
      <SpeechBubble>
        <h1 className="speech-bubble-text">
          👋 배운 것을 기록해두는 공간입니다!
        </h1>
      </SpeechBubble>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 20vw;
  height: 20vw;
  max-width: 100px;
  max-height: 100px;
  .profile-image {
    object-fit: contain;
  }
`;

const SpeechBubble = styled.div`
  position: relative;
  color: white;
  border-radius: 0.4em;
  padding: 0.5rem 0.8rem 0.5rem 0.5rem;
  background-color: #373e47;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left: 0;
    border-bottom: 0;
    margin-top: -5px;
    margin-left: -8px;
    border-right-color: #373e47;
  }
  & > .speech-bubble-text {
    font-size: 1rem;
    font-weight: normal;
  }
`;
