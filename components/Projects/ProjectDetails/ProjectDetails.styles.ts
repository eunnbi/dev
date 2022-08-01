import styled, { css } from "styled-components";

export const DetailsWrapper = styled.div<{ imagesLength: number }>`
  ${({ imagesLength }) =>
    imagesLength === 0
      ? css`
          max-width: 800px;
          width: 100%;
          margin: 0 auto;
        `
      : css`
          display: grid;
          grid-template-columns: 1fr 1fr;
        `}
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
  @media screen and (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
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
