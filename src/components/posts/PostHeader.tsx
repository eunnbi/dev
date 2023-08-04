import styled from "styled-components";
import { convertDateFormat } from "@/lib/date";

const PostHeader = ({
  post
}: {
  post: Pick<Post, "emoji" | "title" | "date" | "category">;
}) => {
  const { emoji, title, date, category } = post;
  return (
    <Header>
      <span className="emoji">{emoji}</span>
      <h1 className="title">{title}</h1>
      <BottomRow>
        <span className="date-text">{convertDateFormat(date)}</span>
        <span className="category-badge">{category}</span>
      </BottomRow>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  width: 100%;
  .title {
    font-size: 2rem;
    line-height: 1.3;
  }
  .emoji {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.5rem;
  .category-badge {
    background-color: ${({ theme }) => theme.color.chipBgColor};
    color: ${({ theme }) => theme.color.tabTextColor};
    padding: 0.3rem 0.8rem;
    border-radius: 16px;
    font-size: 0.9rem;
  }
  .date-text {
    color: #979797;
    font-weight: 500;
  }
`;

export default PostHeader;
