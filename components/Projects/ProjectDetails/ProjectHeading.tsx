import { CgChevronLeftR } from "react-icons/cg";
import styled from "styled-components";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  h2 {
    font-size: 2.2rem;
    text-align: center;
  }
`;

const IconBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const ProjectHeading = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <Wrapper>
      <IconBox>
        <CgChevronLeftR onClick={() => router.back()} />
      </IconBox>
      <h2>{title}</h2>
    </Wrapper>
  );
};

export default ProjectHeading;
