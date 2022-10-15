import styled from "styled-components";
import { convertDateFormat } from "../../lib/date";
import { usePostInfo } from "./hooks/usePostInfo";

const PostHeader = () => {
  const { current } = usePostInfo();
  const { emoji, title, date, category } = current;
  return (
    <Wrapper>
      <span className="emoji">{emoji}</span>

      <h1>{title}</h1>
      <div>
        <p>{convertDateFormat(date)}</p>
        <span>{category}</span>
      </div>
    </Wrapper>
  );
};

export default PostHeader;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  h1 {
    font-size: 2rem;
    line-height: 1.3;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    color: #a8a8a8;
    line-height: 1.5;
    font-weight: 500;
  }
  .emoji {
    font-size: 5rem;
    margin-bottom: 20px;
  }
`;
