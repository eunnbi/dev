import Filter from "@/components/common/Filter";
import type { PostCategory } from "@/lib/posts";
import { usePostCategory } from "@/hooks/usePostCategory";

const PostFilter = ({ categories }: { categories: PostCategory[] }) => {
  const category = usePostCategory();
  return (
    <Filter
      queryName="category"
      filters={categories.map(item => item.category)}
      selectedFilter={category}
      defaultFilter="All"
    />
  );
};

export default PostFilter;
