import Toc from "react-toc";
import styled from "styled-components";

const PostToc = ({ post }: { post: Post }) => {
  return (
    <section>
      <CustomToc markdownText={post.content} lowestHeadingLevel={3} />
    </section>
  );
};

export default PostToc;

const CustomToc = styled(Toc)`
  position: fixed;
  top: 90px;
  right: 60px;
  font-size: 0.9rem;
  color: #9e9e9e;
  font-weight: 500;
  ul {
    padding-left: 20px;
  }
  li {
    padding-bottom: 10px;
  }
`;
