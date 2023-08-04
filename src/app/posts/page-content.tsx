"use client";

import Heading from "@/components/common/Heading";
import PostCount from "@/components/posts/PostCount";
import PostFilter from "@/components/posts/PostFilter";
import PostList from "@/components/posts/PostList";
import { usePostCategory } from "@/hooks/usePostCategory";
import type { PostCategory } from "@/lib/posts";

interface PostsPageProps {
  categories: PostCategory[];
  posts: Post[];
}

export default function PostsPage({ categories, posts }: PostsPageProps) {
  const category = usePostCategory();
  return (
    <>
      <Heading title={category.toUpperCase()} />
      <PostCount categories={categories} />
      <PostFilter categories={categories} />
      <PostList posts={posts} category={category} />
    </>
  );
}
