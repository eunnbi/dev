import styled from "styled-components";
import { usePostInfo } from "./hooks/usePostInfo";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const PostFooter = () => {
  const { prev, next } = usePostInfo();
  return (
    <Bottom>
      {prev ? (
        <Link href={`/posts/${prev.id}`}>
          <Box>
            <FiArrowLeft />
            <p>{prev.title}</p>
          </Box>
        </Link>
      ) : (
        <div></div>
      )}
      {next ? (
        <Link href={`/posts/${next.id}`}>
          <Box>
            <p>{next.title}</p>
            <FiArrowRight />
          </Box>
        </Link>
      ) : (
        <div></div>
      )}
    </Bottom>
  );
};

export default PostFooter;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.a`
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
