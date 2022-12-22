import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import CustomHead from "@components/common/CustomHead";
import { PostContext } from "@contexts/posts/PostContext";
import { getPostData, getPostSlugs, getSortedPostsData } from "@lib/posts";
import PostHeader from "@components/posts/PostHeader";
import PostToc from "@components/posts/PostToc";
import Markdown from "@components/posts/Markdown";
import PostFooter from "@components/posts/PostFooter";
import Utterances from "@components/posts/Utterances";
import styled from "styled-components";

const PostPage = (data: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <CustomHead
        page={data.current.title}
        description={data.current.preview}
        image={`/images/posts/${data.current.id}/thumbnail.png`}
        keywords={[data.current.category]}
      />
      <PostContext.Provider value={data}>
        <Main>
          <PostHeader />
          <Markdown />
          {/*<PostToc />*/}
          <PostFooter />
          <Utterances />
        </Main>
      </PostContext.Provider>
    </>
  );
};

const Main = styled.main`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
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
      prev:
        index === 0
          ? null
          : {
              title: posts[index - 1].title,
              id: posts[index - 1].id
            },
      next:
        index === posts.length - 1
          ? null
          : {
              title: posts[index + 1].title,
              id: posts[index + 1].id
            }
    }
  };
};
