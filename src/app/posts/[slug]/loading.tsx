"use client";

import Skeleton from "@/components/common/Skeleton";
import PostHeader from "@/components/posts/PostHeader";
import { usePostMetadataStore } from "@/stores/postState";
import { useEffect } from "react";

export default function Loading() {
  const state = usePostMetadataStore();
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return (
    <>
      <PostHeader post={state} />
      <Skeleton
        width="100%"
        height="400px"
        style={{
          marginTop: "3rem"
        }}
      />
    </>
  );
}
