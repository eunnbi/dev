import { getPostData, getPostSlugs } from "@/lib/posts";
import PostPage from "./page-content";
import type { Metadata } from "next";
import { createMetadata } from "@/app/shared-metadata";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  const data = getPostData(params.slug);
  return <PostPage data={data} />;
}

export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs;
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostData(params.slug);

  return createMetadata({
    path: `/posts/${post.id}`,
    title: post.title,
    desc: post.preview,
    keywordList: [post.category],
    images: [{ url: `/images/posts/thumbnail/${post.id}.png` }]
  });
}
