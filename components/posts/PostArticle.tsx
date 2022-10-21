import { useRouter } from "next/router";
import styled from "styled-components";
import { convertDateFormat } from "@lib/date";

const PostArticle = ({ id, title, date, category, preview }: Post) => {
  const router = useRouter();
  return (
    <Article onClick={() => router.push(`/posts/${id}`)}>
      <h3>{title}</h3>
      <Preview>{preview}</Preview>
      <Bottom>
        <p>{convertDateFormat(date)}</p>
        <p>{category}</p>
      </Bottom>
    </Article>
  );
};

export default PostArticle;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  padding: 1rem;
  border-radius: 6px;
  h3 {
    font-weight: bold;
    margin-bottom: 7px;
    font-size: 1.4rem;
    line-height: 1.4;
  }
  p {
    font-size: 0.9rem;
  }
  &:hover h3 {
    text-decoration: underline;
  }
`;

const Preview = styled.p`
  margin-bottom: 10px;
  line-height: 21px;
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
  color: #a8a8a8;
`;
