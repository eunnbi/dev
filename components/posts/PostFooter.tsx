import styled from "styled-components";
import { usePostInfo } from "@hooks/usePostInfo";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const PostFooter = () => {
  const { prev, next } = usePostInfo();
  return (
    <Section>
      {prev ? (
        <Box href={`/posts/${prev.id}`}>
          <FiArrowLeft />
          <p>{prev.title}</p>
        </Box>
      ) : (
        <div></div>
      )}
      {next ? (
        <Box href={`/posts/${next.id}`}>
          <p>{next.title}</p>
          <FiArrowRight />
        </Box>
      ) : (
        <div></div>
      )}
    </Section>
  );
};

export default PostFooter;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 50%;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
`;
