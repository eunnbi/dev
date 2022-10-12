import PostFilter from "./PostFilter";
import PostList from "./PostList";
import SectionHeading from "../common/SectionHeading";
import styled from "styled-components";
import { usePosts } from "./hooks/usePosts";

const PostSection = () => {
  const posts = usePosts();
  return (
    <Section>
      <div>
        <SectionHeading title="Posts" />
        <p>{posts.length} posts</p>
      </div>
      <div>
        <PostFilter />
        <PostList posts={posts} />
      </div>
    </Section>
  );
};

export default PostSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  gap: 2.5rem;
  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    p {
      font-weight: 500;
      font-size: 1.1rem;
    }
  }
`;
