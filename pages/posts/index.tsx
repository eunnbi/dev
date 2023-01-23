import { InferGetServerSidePropsType } from "next";
import Heading from "@components/common/Heading";
import CustomHead from "@components/common/CustomHead";
import PostsSection from "@components/posts/PostsSection";
import { CategoriesContext } from "@contexts/posts/CategoriesContext";
import { PostsContext } from "@contexts/posts/PostsContext";
import { getSortedPostsData } from "@lib/posts";
import styled from "styled-components";
import Notice from "@components/posts/Notice";
import PostFilter from "@components/posts/PostFilter";
import { getSessionStorage, SCROLL_POS_KEY } from "@lib/sessionStorage";
import { useEffect } from "react";
import PostCount from "@components/posts/PostCount";

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
  return (
    <>
      <CustomHead page="Posts" />
      <Notice />
      <Main>
        <Heading title="Posts" />
        <CategoriesContext.Provider value={categories}>
          <PostsContext.Provider value={posts}>
            <PostCount />
            <PostFilter />
            <PostsSection />
          </PostsContext.Provider>
        </CategoriesContext.Provider>
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 30px 0 60px;
`;

export default PostsPage;

export const getStaticProps = async () => {
  const posts = getSortedPostsData();
  const categories = posts.map(post => post.category);
  return {
    props: {
      posts,
      categories: [
        "All",
        ...categories.filter(
          (category, index) => categories.indexOf(category) === index
        )
      ]
    }
  };
};
