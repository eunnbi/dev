import styled from "styled-components";
const PostItem = ({ post }: { post: Post }) => {
  const { title, date, category, preview } = post;
  return (
    <Item>
      <h3>{title}</h3>
      <Preview>{preview}</Preview>
      <Bottom>
        <p>{date}</p>
        <p>{category}</p>
      </Bottom>
    </Item>
  );
};

export default PostItem;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: ${({ theme }) => `1px solid ${theme.color.postCardBorderColor}`};
  padding: 1rem;
  border-radius: 6px;
  h3 {
    font-weight: bold;
    margin-bottom: 7px;
    font-size: 1.3rem;
    line-height: 1.4;
  }
  p {
    font-size: 1rem;
  }
  &:hover h3 {
    text-decoration: underline;
  }
`;

const Preview = styled.p`
  margin-bottom: 10px;
  line-height: 20px;
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
