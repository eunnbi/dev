import { IoClose } from "react-icons/io5";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 5px;
  background: none;
  font-size: 2rem;
  font-weight: bold;
  transition: transform 0.3s ease-in-out;
  svg {
    color: ${({ theme }) => theme.color.violet};
  }
  &:hover {
    transform: scale(1.5);
  }
`;

const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <Button>
      <IoClose onClick={onClose} />
    </Button>
  );
};

export default CloseButton;
