import styled from "styled-components";
import { usePostInfo } from "@hooks/usePostInfo";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const PostNav = () => {
  const { prev, next } = usePostInfo();
  return (
    <Nav>
      {prev ? (
        <Box href={`/posts/${prev.id}`} passHref>
          <FiArrowLeft />
          <p>{prev.title}</p>
        </Box>
      ) : (
        <div></div>
      )}
      {next ? (
        <Box href={`/posts/${next.id}`} passHref>
          <p>{next.title}</p>
          <FiArrowRight />
        </Box>
      ) : (
        <div></div>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
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

export default PostNav;
