import {
  getCategoryFromSearchParams,
  getPostCategories,
  getSortedPostsData
} from "@/lib/posts";
import PostsPage from "./page-content";
import { createMetadata } from "../shared-metadata";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page({ searchParams }: PageProps) {
  const category = getCategoryFromSearchParams(searchParams.category);
  const categories = getPostCategories();
  const posts = getSortedPostsData(category ? { category } : undefined);
  return <PostsPage categories={categories} posts={posts} />;
}

export const metadata = createMetadata({
  path: "/posts",
  title: "Posts"
});
