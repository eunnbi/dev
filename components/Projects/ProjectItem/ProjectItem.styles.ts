import styled from "styled-components";

export const Item = styled.li`
  box-shadow: 1px 3px 15px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  & > span {
    position: unset !important;
  }
  img {
    height: auto !important;
    position: relative !important;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

export const Info = styled.div`
  padding: 1.3rem 0.5rem 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  > ul {
    justify-content: center;
    &:last-child {
      align-self: flex-end;
    }
  }
`;
