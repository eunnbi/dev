import { usePostCategory } from "@/hooks/usePostCategory";
import type { PostCategory } from "@/lib/posts";
import styled from "styled-components";

const PostCount = ({ categories }: { categories: PostCategory[] }) => {
  const category = usePostCategory();
  return (
    <Span>
      {categories.find(item => item.category === category)?.count} posts
    </Span>
  );
};

const Span = styled.span`
  margin: 10px 0 2rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.1rem;
`;

export default PostCount;
