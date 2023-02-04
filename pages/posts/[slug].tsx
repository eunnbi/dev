import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import CustomHead from "@components/common/CustomHead";
import { PostContext } from "@contexts/posts/PostContext";
import { getPostData, getPostSlugs, getSortedPostsData } from "@lib/posts";
import PostHeader from "@components/posts/PostHeader";
import Markdown from "@components/posts/Markdown";
import PostNav from "@components/posts/PostNav";
import Utterances from "@components/posts/Utterances";
import styled from "styled-components";

const PostPage = (data: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <CustomHead
        page={data.current.title}
        description={data.current.preview}
        image={`/images/posts/thumbnail/${data.current.id}.png`}
        keywords={[data.current.category]}
      />
      <PostContext.Provider value={data}>
        <Main>
          <article>
            <PostHeader />
            <Markdown />
          </article>
          <PostNav />
          <Utterances />
        </Main>
      </PostContext.Provider>
    </>
  );
};

const Main = styled.main`
  margin-top: 2rem;
  margin-bottom: 2rem;
  & > article {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;

export default PostPage;

export const getStaticPaths = async () => {
  const paths = getPostSlugs();
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params!.slug;
  const posts = getSortedPostsData();
  const index = posts.findIndex(post => post.id === slug);
  const data = getPostData(slug as string);
  return {
    props: {
      current: data,
      next:
        index === 0
          ? null
          : {
              title: posts[index - 1].title,
              id: posts[index - 1].id
            },
      prev:
        index === posts.length - 1
          ? null
          : {
              title: posts[index + 1].title,
              id: posts[index + 1].id
            }
    }
  };
};
