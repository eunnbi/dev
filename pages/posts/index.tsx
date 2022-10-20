import { InferGetServerSidePropsType } from "next";
import Heading from "@components/common/Heading";
import CustomHead from "@components/common/CustomHead";
import PostsSection from "@components/posts/PostsSection";
import { CategoriesContext } from "@context/posts/CategoriesContext";
import { PostsContext } from "@context/posts/PostsContext";
import { getSortedPostsData } from "@lib/posts";
import styled from "styled-components";

const PostsPage = ({
  posts,
  categories,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  //console.log(posts, categories);
  return (
    <>
      <CustomHead page="Posts" />
      <Main>
        <Heading title="Posts" />
        <p>{posts.length} posts</p>
        <CategoriesContext.Provider value={categories}>
          <PostsContext.Provider value={posts}>
            <PostsSection />
          </PostsContext.Provider>
        </CategoriesContext.Provider>
      </Main>
    </>
  );
};

export default PostsPage;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  & > p {
    text-align: center;
    font-weight: 500;
    font-size: 1.1rem;
    margin-top: 10px;
  }
`;

export const getStaticProps = async () => {
  const posts = getSortedPostsData();
  const categories = posts.map((post) => post.category);
  return {
    props: {
      posts,
      categories: [
        "All",
        ...categories.filter(
          (category, index) => categories.indexOf(category) === index
        ),
      ],
    },
  };
};
