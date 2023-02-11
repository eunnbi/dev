import { InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import Heading from "@components/common/Heading";
import CustomHead from "@components/common/CustomHead";
import PostCount from "@components/posts/PostCount";
import PostList from "@components/posts/PostList";
import Notice from "@components/posts/Notice";
import PostFilter from "@components/posts/PostFilter";
import { CategoriesContext } from "@contexts/posts/CategoriesContext";
import { PostsContext } from "@contexts/posts/PostsContext";
import { getPostCategories, getSortedPostsData } from "@lib/posts";
import { getSessionStorage, SCROLL_POS_KEY } from "@lib/sessionStorage";
import styled from "styled-components";
import { useRouter } from "next/router";

const PostsPage = ({
  posts,
  categories
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  useEffect(() => {
    const value = getSessionStorage<number>(SCROLL_POS_KEY, 0);
    window.scrollTo({
      top: value
    });
  }, []);
  const router = useRouter();
  return (
    <>
      <CustomHead page="Posts" />
      <Notice />
      <Main>
        <Heading title={router.query.category as string} />
        <CategoriesContext.Provider value={categories}>
          <PostsContext.Provider value={posts}>
            <PostCount />
            <PostFilter />
            <PostList />
          </PostsContext.Provider>
        </CategoriesContext.Provider>
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

export default PostsPage;

export const getStaticProps = async () => {
  const posts = getSortedPostsData();
  const categories = getPostCategories();
  return {
    props: {
      posts,
      categories: ["All", ...categories]
    }
  };
};
