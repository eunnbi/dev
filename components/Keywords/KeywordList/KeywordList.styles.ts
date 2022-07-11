import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
  svg {
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0 1rem;
  }
`;

export const List = styled.ul`
  height: 320px;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
`;
