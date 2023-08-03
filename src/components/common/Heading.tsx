import styled from "styled-components";

export default function Heading({ title }: { title: string }) {
  return (
    <H1>
      <span className="heading-text">{title}</span>
    </H1>
  );
}

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.8rem;
  & > .heading-text {
    padding-bottom: 5px;
    border-bottom: ${({ theme }) => `4px solid ${theme.color.textColor}`};
  }
`;
