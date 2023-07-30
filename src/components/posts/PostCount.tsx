import type { PostCategoryItem } from "@/lib/posts";
import { useRouter } from "next/router";
import styled from "styled-components";

const PostCount = ({ categories }: { categories: PostCategoryItem[] }) => {
  const { query } = useRouter();
  const category = (query.category as string) || "All";
  return (
    <Text>
      {categories.find(item => item.category === category)?.count} posts
    </Text>
  );
};

const Text = styled.span`
  text-align: center;
  font-weight: 500;
  font-size: 1.1rem;
  margin: 10px 0 2rem;
`;

export default PostCount;
