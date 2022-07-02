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

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  span:first-child {
    font-weight: bold;
  }
  span:last-child {
    color: rgba(0, 0, 0, 0.8);
  }
`;
