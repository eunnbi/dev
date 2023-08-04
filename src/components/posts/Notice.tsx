import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Notice = () => {
  const [show, setShow] = useState(true);
  return show ? (
    <Box>
      <p>현재 블로그 이전 중입니다.</p>
      👉
      <a href="https://velog.io/@eunnbi" className="blog-link">
        전 블로그 보러가기
      </a>
      <button
        onClick={() => setShow(false)}
        type="button"
        aria-label="닫기 버튼"
        className="close-button"
      >
        <IoClose />
      </button>
    </Box>
  ) : null;
};

const Box = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  z-index: 10;
  width: 60vw;
  max-width: 250px;
  padding: 1rem;
  transform: translateX(-50%);
  text-align: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.tabSelectedBgColor};

  .close-button {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.textColor};
  }
  .blog-link:hover {
    text-decoration: underline;
  }
`;

export default Notice;
