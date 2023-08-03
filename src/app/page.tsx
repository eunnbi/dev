import { getSortedPostsData } from "@/lib/posts";
import HomePage from "./page-content";

export default function Page() {
  const posts = getSortedPostsData();
  return <HomePage posts={posts.slice(0, 10)} />;
}
