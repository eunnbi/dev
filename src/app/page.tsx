import type { Metadata } from "next";
import { getSortedPostsData } from "@/lib/posts";
import { generateMetadata } from "./shared-metadata";
import HomePage from "./page-content";

export default function Page() {
  const posts = getSortedPostsData();
  return <HomePage posts={posts.slice(0, 10)} />;
}

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Home"
});
