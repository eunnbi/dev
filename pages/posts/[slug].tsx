import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import CustomHead from "@components/common/CustomHead";
import PostMain from "@components/posts/PostMain";
import { PostContext } from "@context/posts/PostContext";
import { getPostData, getPostSlugs, getSortedPostsData } from "@lib/posts";

const PostPage = (data: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <CustomHead
        page={data.current.title}
        description={data.current.preview}
      />
      <PostContext.Provider value={data}>
        <PostMain />
      </PostContext.Provider>
    </>
  );
};

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
