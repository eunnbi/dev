import styled from "styled-components";
import { usePosts } from "@hooks/usePosts";
import Router from "next/router";
import { convertDateFormat } from "@lib/date";
import { SCROLL_POS_KEY, setSessionStorage } from "@lib/sessionStorage";

const PostsSection = () => {
  const posts = usePosts();
  return (
    <Section>
      {posts.map(post => (
        <PostArticle key={post.id} {...post} />
      ))}
    </Section>
  );
};

const Section = styled.section`
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
      <h3>
        {emoji}
        <span>{title}</span>
      </h3>
      <Preview>{preview}</Preview>
      <Bottom>
        <p>{convertDateFormat(date)}</p>
        <p>{category}</p>
      </Bottom>
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
  h3 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 7px;
    font-size: 1.4rem;
    line-height: 1.4;
  }
  p {
    font-size: 0.9rem;
  }
  &:hover h3 > span {
    text-decoration: underline;
  }
`;

const Preview = styled.p`
  margin-bottom: 10px;
  line-height: 1.3125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #979797;
`;

export default PostsSection;
