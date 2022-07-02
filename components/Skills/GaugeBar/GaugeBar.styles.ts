import styled from "styled-components";

export const StyledGaugeBar = styled.div`
  width: 100%;
  height: 15px;
  border: 1px solid #ad97d2;
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
  background-color: ${({ percent }) => (percent > 60 ? "#7854b6" : "#dcc9fc")};
`;
