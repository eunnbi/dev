import styled from "styled-components";

const Notice = () => {
  return (
    <Text>
      <span>현재 블로그 이전 중입니다.</span>
      <br />
      <a href="https://velog.io/@eunnbi">👉 전 블로그 보러가기</a>
    </Text>
  );
};

export default Notice;

const Text = styled.p`
  margin-bottom: 20px;
  text-align: center;
  border-radius: 10px;
  a:hover {
    text-decoration: underline;
  }
`;
