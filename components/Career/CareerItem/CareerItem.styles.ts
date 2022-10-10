import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 1rem 0.6rem;
  gap: 15px;
  h3 {
    font-size: 1.3rem;
  }
`;

export const Period = styled.p`
  font-size: 1rem;
  color: #828282;
`;

export const Content = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;
