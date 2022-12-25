import styled from "styled-components";
import { convertDateFormat } from "@lib/date";
import { usePostInfo } from "@hooks/usePostInfo";

const PostHeader = () => {
  const { current } = usePostInfo();
  const { emoji, title, date, category } = current;
  return (
    <Section>
      <span className="emoji">{emoji}</span>
      <div>
        <h1>{title}</h1>
        <span className="category">{category}</span>
      </div>
      <span className="date">{convertDateFormat(date)}</span>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  h1 {
    font-size: 2rem;
    line-height: 1.3;
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  .emoji {
    font-size: 5rem;
    margin-bottom: 1.5rem;
  }
  .category {
    background-color: ${({ theme }) => theme.color.chipBgColor};
    color: ${({ theme }) => theme.color.tabTextColor};
    padding: 0.1rem 0.5rem;
    border-radius: 10px;
    font-size: 0.8rem;
  }
  .date {
    color: #979797;
    font-weight: 500;
    margin-top: 0.5rem;
  }
`;

export default PostHeader;
