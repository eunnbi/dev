import type { InferGetStaticPropsType } from "next";
import Image from "next/image";
import CustomHead from "@components/common/CustomHead";
import styled from "styled-components";
import { useEffect } from "react";
import { getSortedPostsData } from "@lib/posts";
import Heading from "@components/common/Heading";
import PostList from "@components/posts/PostList";
import { PostsContext } from "@contexts/posts/PostsContext";
import Link from "next/link";
import { Button } from "@mui/material";

const HomePage = ({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <>
      <CustomHead page="Home" />
      <Main>
        <Section>
          <div className="image-wrapper">
            <Image
              alt="강은비 프로필 미모티콘"
              src="/images/profile.png"
              fill
              priority
              sizes="100px"
            />
          </div>
          <SpeechBubble>
            <h1>👋 배운 것을 기록해두는 공간입니다!</h1>
          </SpeechBubble>
        </Section>
        <PostsContext.Provider value={posts}>
          <section>
            <Heading title="Latest Posts" />
            <PostList />
          </section>
        </PostsContext.Provider>
        <Button type="button" aria-label="포스팅 더보기 버튼">
          <Link href="/posts" passHref>
            More
          </Link>
        </Button>
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 3rem;
  & > button {
    font-weight: bold;
    background-color: ${({ theme }) => theme.color.tabSelectedBgColor};
  }
`;

const SpeechBubble = styled.div`
  position: relative;
  color: white;
  border-radius: 0.4em;
  padding: 0.5rem 0.8rem 0.5rem 0.5rem;
  background-color: ${({ theme }) => theme.color.speechBubbleBg};
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
    border-right-color: ${({ theme }) => theme.color.speechBubbleBg};
  }
  & > h1 {
    font-size: 1rem;
    font-weight: normal;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .image-wrapper {
    position: relative;
    width: 20vw;
    height: 20vw;
    max-width: 100px;
    max-height: 100px;
    img {
      object-fit: contain;
    }
  }
`;

export const getStaticProps = async () => {
  const posts = getSortedPostsData({ size: 10 });
  return {
    props: {
      posts
    }
  };
};

export default HomePage;
