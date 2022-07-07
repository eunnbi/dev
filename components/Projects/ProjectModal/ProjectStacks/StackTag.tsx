import styled from "styled-components";

const Tag = styled.div<{ color: string }>`
  padding: 0.1rem 0.5rem;
  border-radius: 5px;
  background-color: ${({ color }) => `#${color}`};
`;

interface TagProps {
  text: string;
  color: string;
}

const StackTag = ({ text, color }: TagProps) => {
  return <Tag color={color}>{text}</Tag>;
};

export default StackTag;
