import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  margin-top: -1px;
  h3 {
    font-size: 1.3rem;
  }
`;

export const Period = styled.div`
  margin-top: 0.1rem;
  padding: 1rem 1rem 0 0;
  font-weight: 500;
  min-width: 10rem;
  text-align: right;
  flex-shrink: 0;

  p {
    font-size: 1rem;
  }
  @media ${({ theme }) => theme.device.laptop} {
    min-width: auto;
    width: 6rem;
    text-align: left;
  }
`;

export const Content = styled.div`
  margin-top: 1px;
  position: relative;
  padding: 1rem 0 2rem 15px;
  border-left: 1px solid lightgray;
  p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`;
