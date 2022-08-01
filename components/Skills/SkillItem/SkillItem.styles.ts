import styled from "styled-components";

export const Item = styled.li`
  max-width: 470px;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  .SkillsItem-gauge {
    flex-grow: 1;
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  span:last-child {
    color: ${({ theme }) => theme.color.textColor};
    font-weight: 500;
    opacity: 0.9;
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    margin-top: 3px;
  }
  span:first-child {
    font-weight: bold;
  }
`;
