import styled, { css } from "styled-components";

export const StyledGaugeBar = styled.div`
  width: 100%;
  height: 15px;
  border: 1px solid ${({ theme }) => theme.color.purple};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

export const StyledGauge = styled.div<{ percent: number }>`
  width: ${({ percent }) => `${percent}%`};
  height: 7px;
  border-radius: 10px;
  background-color: #ad97d2;
  background-color: ${({ percent, theme }) =>
    percent > 60 ? theme.color.darkPurple : theme.color.lightPurple};
  --percent: ${({ percent }) => `${percent}%`};
  animation: gauge 1.8s linear forwards;
  @keyframes gauge {
    0% {
      width: 0;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      width: var(--percent);
    }
  }
`;
