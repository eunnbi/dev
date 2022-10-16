import React, { useCallback } from "react";
import { IoChevronUpOutline } from "react-icons/io5";
import styled from "styled-components";

const TopButton = () => {
  const onClick = useCallback(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <Button onClick={onClick}>
      <IoChevronUpOutline />
    </Button>
  );
};

export default React.memo(TopButton);

const Button = styled.button`
  position: fixed;
  bottom: 60px;
  right: 20px;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.color.textColor};
  }
`;
