"use client";

import { IoChevronUpOutline } from "react-icons/io5";
import styled from "styled-components";

export default function TopButton() {
  const onClick = () => {
    window.scrollTo({
      top: 0
    });
  };
  return (
    <Button
      onClick={onClick}
      aria-label="스크롤을 위로 옮기는 버튼"
      type="button"
    >
      <IoChevronUpOutline className="icon" />
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 60px;
  right: 20px;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.color.textColor};
  }
`;
