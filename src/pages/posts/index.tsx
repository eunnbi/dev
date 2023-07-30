import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import { useEffect } from "react";
import Heading from "@/components/common/Heading";
import CustomHead from "@/components/common/CustomHead";
import PostCount from "@/components/posts/PostCount";
import PostList from "@/components/posts/PostList";
import Notice from "@/components/posts/Notice";
import PostFilter from "@/components/posts/PostFilter";
import { getPostCategories, getSortedPostsData } from "@/lib/posts";
import { getSessionStorage, SCROLL_POS_KEY } from "@/lib/sessionStorage";
import styled from "styled-components";

const PostsPage = ({
  categories,
  posts,
  category
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    const value = getSessionStorage<number>(SCROLL_POS_KEY, 0);
    window.scrollTo({
      top: value
    });
  }, []);
  return (
    <>
      <CustomHead page="Posts" />
      <Notice />
      <Main>
        <Heading title={category?.toUpperCase()} />
        <PostCount categories={categories} />
        <PostFilter categories={categories} />
        <PostList infiniteScroll allPostsData={posts} category={category} />
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const category = ctx.query.category as string | undefined;
  const categories = getPostCategories();
  const posts = getSortedPostsData({
    category,
    page: 0,
    size: 10
  });
  return {
    props: {
      categories,
      posts,
      category: category || "All"
    }
  };
};
export default PostsPage;
