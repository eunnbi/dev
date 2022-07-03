import { IoClose, IoMenu } from "react-icons/io5";
import styled from "styled-components";

const ToggleBtn = styled.button`
  display: none;
  position: fixed;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  width: 3.2rem;
  height: 3.2rem;
  background-color: blueviolet;
  color: #fff;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  z-index: 2;
  padding: 0;
  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
  }
`;

type NavToggleBtnProps = {
  showNav: boolean;
  setShowNav: () => void;
};

const NavToggleBtn = ({ showNav, setShowNav }: NavToggleBtnProps) => {
  return (
    <ToggleBtn onClick={() => setShowNav()}>
      {showNav ? <IoClose /> : <IoMenu />}
    </ToggleBtn>
  );
};

export default NavToggleBtn;
