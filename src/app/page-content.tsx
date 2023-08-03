"use client";

import Introduction from "@/components/about/Introduction";
import Heading from "@/components/common/Heading";
import PostList from "@/components/posts/PostList";
import Link from "next/link";
import styled from "styled-components";

export default function HomePage({ posts }: { posts: Post[] }) {
  return (
    <Main>
      <Introduction />
      <Section>
        <Heading title="Latest Posts" />
        <PostList posts={posts} category="All" />
        <MoreLink href="/posts" aria-label="포스팅 더보기 버튼" passHref>
          More
        </MoreLink>
      </Section>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 3rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoreLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  margin-top: 1.5rem;
  font-weight: bold;
  background-color: #373e47;
  color: white;
  border-radius: 8px;
`;
