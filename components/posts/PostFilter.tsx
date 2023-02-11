import { useContext } from "react";
import { CategoriesContext } from "@contexts/posts/CategoriesContext";
import Filter from "@components/common/Filter";
import { useRouter } from "next/router";

const PostFilter = () => {
  const categories = useContext(CategoriesContext);
  const router = useRouter();
  return (
    <Filter
      queryName="category"
      filters={categories}
      filter={(router.query.category as string) || "All"}
    />
  );
};

export default PostFilter;
