import styled from "styled-components";
import { usePosts } from "@hooks/usePosts";
import Router from "next/router";
import { convertDateFormat } from "@lib/date";
import { SCROLL_POS_KEY, setSessionStorage } from "@lib/sessionStorage";

const PostList = () => {
  const posts = usePosts();
  return (
    <Wrapper>
      {posts.map(post => (
        <PostArticle key={post.id} {...post} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2rem;
`;

// ---------------------------------------------------

const PostArticle = ({ id, title, date, category, preview, emoji }: Post) => {
  const onClick = () => {
    Router.push(`/posts/${id}`);
    setSessionStorage(SCROLL_POS_KEY, window.scrollY);
  };
  return (
    <Article onClick={onClick}>
      <h1>
        {emoji}
        <span>{title}</span>
      </h1>
      <p>{preview}</p>
      <div>
        <span>{convertDateFormat(date)}</span>
        <span>{category}</span>
      </div>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  padding: 1rem;
  border-radius: 6px;
  h1 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 7px;
    font-size: 1.4rem;
    line-height: 1.4;
  }
  &:hover h1 > span {
    text-decoration: underline;
  }
  p {
    margin-bottom: 10px;
    line-height: 1.3125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 0.9rem;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #7d7d7d;
    font-size: 0.9rem;
  }
`;

export default PostList;
