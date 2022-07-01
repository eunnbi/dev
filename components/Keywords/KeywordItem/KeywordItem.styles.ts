import styled from "styled-components";

export const Item = styled.li`
  box-shadow: 1px 3px 10px 0 rgb(0, 0, 0, 0.2);
  border-radius: 30px;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
  @keyframes pop {
  }
`;

export const Content = styled.p`
  font-size: 1.1rem;
  display: flex;
  span:first-child {
    margin-right: 10px;
  }
`;

export const Wrapper = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Box = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 1rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  gap: 1rem;
  svg {
    cursor: pointer;
    font-size: 2rem;
    align-self: flex-end;
  }
`;
