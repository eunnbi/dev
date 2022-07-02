import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  h3 {
    font-size: 1.3rem;
  }
`;

export const Period = styled.div`
  margin-top: 5px;
  padding: 1rem 1rem 0 0;
  font-weight: bold;
  min-width: 10rem;
  text-align: right;
  flex-shrink: 0;
  @media screen and (max-width: 1020px) {
    min-width: auto;
    width: 6rem;
    text-align: left;
  }
`;

export const Content = styled.div`
  margin-top: 1px;
  position: relative;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem 0 2rem 1rem;
  p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`;
