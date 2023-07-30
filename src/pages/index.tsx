import type { InferGetStaticPropsType } from "next";
import Image from "next/image";
import CustomHead from "@/components/common/CustomHead";
import styled from "styled-components";
import { useEffect } from "react";
import { getSortedPostsData } from "@/lib/posts";
import Heading from "@/components/common/Heading";
import PostList from "@/components/posts/PostList";
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
        <section>
          <Heading title="Latest Posts" />
          <PostList allPostsData={posts} category="All" />
        </section>
        <MoreButton type="button" aria-label="포스팅 더보기 버튼">
          <Link href="/posts" passHref>
            More
          </Link>
        </MoreButton>
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
    background-color: #373e47;
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

const MoreButton = styled.button`
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.color.shadowColor};
`

export const getStaticProps = async () => {
  const posts = getSortedPostsData({ size: 10, page: 0 });
  return {
    props: {
      posts
    }
  };
};

export default HomePage;
