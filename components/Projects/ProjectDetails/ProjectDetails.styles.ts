import styled from "styled-components";

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  article {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 1.25rem;
    }
    p {
      font-size: 1.1rem;
    }
    a:hover span {
      text-decoration: underline;
    }
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .project-period {
    font-size: 1.05rem;
  }
`;
