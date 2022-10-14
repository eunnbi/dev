import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import CustomHead from "../../components/common/CustomHead";
import PostSection from "../../components/posts/PostSection";
import { PostContext } from "../../context/posts/PostContext";
import { getPostData, getPostsSlug } from "../../lib/posts";

const PostPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <CustomHead page={data.title} />
      <main>
        <PostContext.Provider value={data}>
          <PostSection />
        </PostContext.Provider>
      </main>
    </>
  );
};

export default PostPage;

export const getStaticPaths = async () => {
  const paths = getPostsSlug();
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params!.slug;
  const data = getPostData(slug as string);
  return {
    props: {
      data,
    },
  };
};
