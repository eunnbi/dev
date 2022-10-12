import styled from "styled-components";
import Link from "next/link";
import NavToggleBtn from "./NavToggleBtn";

const HeaderCenter = ({ onToggle }: { onToggle: () => void }) => {
  return (
    <Center>
      <Link href="/">
        <a>eunnbi.dev</a>
      </Link>
      <NavToggleBtn onToggle={onToggle} />
    </Center>
  );
};

export default HeaderCenter;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
