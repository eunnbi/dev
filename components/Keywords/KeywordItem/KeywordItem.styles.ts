import styled, { css } from "styled-components";
import { SIDE } from "../keywords";

export const Item = styled.li<{ side: string }>`
  background-color: #a452b1;
  border-radius: 30px;
  text-align: center;
  padding: 1.3rem 1rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  color: white;
  &:hover {
    transform: scale(1.2);
  }
`;

const topStyle = css`
  top: -8rem;
  &:after {
    bottom: 0;
    border-top-color: #a452b1;
    border-bottom: 0;
    margin-bottom: -20px;
  }
`;

const bottomStyle = css`
  bottom: -8rem;
  &:after {
    top: 0;
    border-bottom-color: #a452b1;
    border-top: 0;
    margin-top: -20px;
  }
`;

const leftStyle = css`
  left: -1.8rem;
  &:after {
    border-right: 0;
  }
`;

const rightStyle = css`
  right: -1.8rem;
  &:after {
    border-left: 0;
  }
`;

const topLeftStyle = css`
  ${topStyle};
  ${leftStyle};
`;

const topRightStyle = css`
  ${topStyle};
  ${rightStyle};
`;

const bottomLeftStyle = css`
  ${bottomStyle};
  ${leftStyle};
`;

const bottomRightStyle = css`
  ${bottomStyle};
  ${rightStyle};
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
  position: fixed;
  top: 0;
  left: 20rem;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
  @media screen and (max-width: 1020px) {
    left: 0;
  }
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
