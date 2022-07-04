import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
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
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
