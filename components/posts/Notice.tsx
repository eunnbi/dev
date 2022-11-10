import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Notice = () => {
  const [show, setShow] = useState(true);
  return show ? (
    <Box>
      <p>현재 블로그 이전 중입니다.</p>
      👉<a href="https://velog.io/@eunnbi"> 전 블로그 보러가기</a>
      <button onClick={() => setShow(false)}>
        <IoClose />
      </button>
    </Box>
  ) : null;
};

export default Notice;

const Box = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  border-radius: 10px;
  padding: 1rem;
  z-index: 10;
  width: 60vw;
  max-width: 250px;
  background-color: ${({ theme }) => theme.color.tabSelectedBgColor};
  a:hover {
    text-decoration: underline;
  }
  button {
    color: ${({ theme }) => theme.color.textColor};
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 1.2rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
  }
`;
