import { InferGetServerSidePropsType } from "next";
import CustomHead from "../../components/common/CustomHead";
import PostsSection from "../../components/posts/PostsSection";
import { CategoriesContext } from "../../context/posts/CategoriesContext";
import { PostsContext } from "../../context/posts/PostsContext";
import { getSortedPostsData } from "../../lib/posts";

const PostsPage = ({
  posts,
  categories,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  //console.log(posts, categories);
  return (
    <>
      <CustomHead page="Posts" />
      <main>
        <CategoriesContext.Provider value={categories}>
          <PostsContext.Provider value={posts}>
            <PostsSection />
          </PostsContext.Provider>
        </CategoriesContext.Provider>
      </main>
    </>
  );
};

export default PostsPage;

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
