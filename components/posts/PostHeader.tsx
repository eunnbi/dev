import styled from "styled-components";
import { convertDateFormat } from "@lib/date";
import { usePostInfo } from "@hooks/usePostInfo";
import { useSetRecoilState } from "recoil";
import { postFilterState } from "@stores/postFilterState";
import Router from "next/router";

const PostHeader = () => {
  const { current } = usePostInfo();
  const { emoji, title, date, category } = current;
  const setFilter = useSetRecoilState(postFilterState);
  const onClick = () => {
    Router.push("/posts").then(() => {
      setFilter(category);
    });
  };
  return (
    <Section>
      <span className="emoji">{emoji}</span>
      <h1>{title}</h1>
      <div>
        <span className="date">{convertDateFormat(date)}</span>
        <span className="category" onClick={onClick}>
          {category}
        </span>
      </div>
    </Section>
  );
};

const Section = styled.section`
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
    cursor: pointer;
    font-size: 0.9rem;
  }
  .date {
    color: #979797;
    font-weight: 500;
  }
`;

export default PostHeader;
