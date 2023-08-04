"use client";

import Heading from "@/components/common/Heading";
import Skeleton from "@/components/common/Skeleton";
import { usePostCategory } from "@/hooks/usePostCategory";
import styled from "styled-components";

export default function Loading() {
  const category = usePostCategory();
  return (
    <>
      <Heading title={category.toUpperCase()} />
      <Skeleton
        width="100%"
        height="42px"
        style={{
          marginTop: "60px"
        }}
      />
      <Wrapper>
        {Array(5)
          .fill("")
          .map((_, index) => (
            <Skeleton key={index} width="100%" height="121px" />
          ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
  width: 100%;
`;
