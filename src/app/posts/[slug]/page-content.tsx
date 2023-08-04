"use client";

import PostHeader from "@/components/posts/PostHeader";
import Utterances from "@/components/posts/Utterances";
import Markdown from "@/components/posts/Markdown";
import styled from "styled-components";

export default function PostPage({ data }: { data: Post }) {
  return (
    <>
      <Article>
        <PostHeader post={data} />
        <Markdown post={data} />
      </Article>
      <Utterances />
    </>
  );
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 3rem;
`;
