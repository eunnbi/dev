import React from "react";
import { IoMenu } from "react-icons/io5";
import styled from "styled-components";

interface NavToggleBtnProps {
  onToggle: () => void;
}

const NavToggleBtn = ({ onToggle }: NavToggleBtnProps) => {
  return (
    <ToggleBtn onClick={onToggle}>
      <IoMenu />
    </ToggleBtn>
  );
};

const ToggleBtn = styled.button`
  display: none;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  padding: 0;
  svg {
    color: ${({ theme }) => theme.color.textColor};
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
  }
`;

export default React.memo(NavToggleBtn);
