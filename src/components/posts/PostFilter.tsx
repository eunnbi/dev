import Filter from "@/components/common/Filter";
import type { PostCategory } from "@/lib/posts";
import { usePostCategory } from "@/hooks/usePostCategory";
import { usePathname, useRouter } from "next/navigation";

const QUERY_NAME = "category";
const PostFilter = ({ categories }: { categories: PostCategory[] }) => {
  const category = usePostCategory();
  const pathname = usePathname();
  const router = useRouter();
  const changeFilter = (filter: Filter) => {
    const splitedPath = pathname!.split("?");
    const basePath = splitedPath[0];
    const params = new URLSearchParams(splitedPath[1]);
    params.delete(QUERY_NAME);
    if (filter !== "all") {
      params.append(QUERY_NAME, filter);
    }
    router.push(`${basePath}?${params}`);
  };
  return (
    <Filter
      filters={categories.map(item => item.category)}
      selectedFilter={category}
      changeFilter={changeFilter}
    />
  );
};

export default PostFilter;
