import Filter from "@/components/common/Filter";
import { useRouter } from "next/router";
import type { PostCategoryItem } from "@/lib/posts";

const PostFilter = ({ categories }: { categories: PostCategoryItem[] }) => {
  const router = useRouter();
  return (
    <Filter
      queryName="category"
      filters={categories.map(item => item.category)}
      filter={(router.query.category as string) || "All"}
      defaultFilter="All"
    />
  );
};

export default PostFilter;
