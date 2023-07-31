import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import CustomHead from "@/components/common/CustomHead";
import { getPostData, getPostSlugs } from "@/lib/posts";
import PostHeader from "@/components/posts/PostHeader";
import Markdown from "@/components/posts/Markdown";
import Utterances from "@/components/posts/Utterances";
import styled from "styled-components";

const PostPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <CustomHead
        page={data.title}
        description={data.preview}
        image={`/images/posts/thumbnail/${data.id}.png`}
        keywords={[data.category]}
      />
      <Main>
        <article>
          <PostHeader post={data} />
          <Markdown post={data} />
        </article>
        <Utterances />
      </Main>
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
    margin-bottom: 3rem;
  }
`;

export default PostPage;

export const getStaticPaths = async () => {
  const paths = getPostSlugs();
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params!.slug;
  const data = getPostData(slug as string);
  return {
    props: {
      data
    }
  };
};
