import styled from "styled-components";
import { convertDateFormat } from "@/lib/date";

const PostHeader = ({ post }: { post: PostGetResponse["current"] }) => {
  const { emoji, title, date, category } = post;
  return (
    <Header>
      <span className="emoji">{emoji}</span>
      <h1>{title}</h1>
      <div>
        <span className="date">{convertDateFormat(date)}</span>
        <span className="category">{category}</span>
      </div>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    margin-top: 0.5rem;
  }
  h1 {
    font-size: 2rem;
    line-height: 1.3;
  }
  .emoji {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
  .category {
    background-color: ${({ theme }) => theme.color.chipBgColor};
    color: ${({ theme }) => theme.color.tabTextColor};
    padding: 0.3rem 0.8rem;
    border-radius: 16px;
    font-size: 0.9rem;
  }
  .date {
    color: #979797;
    font-weight: 500;
  }
`;

export default PostHeader;
