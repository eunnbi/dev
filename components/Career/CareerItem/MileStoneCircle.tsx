import styled from "styled-components";

const OutsideCircle = styled.div`
  position: absolute;
  top: 1.4rem;
  left: -8px;
  width: 14px;
  height: 14px;
  background-color: ${({ theme }) => theme.color.lightPurple};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const InsideCircle = styled.div`
  width: 10px;
  height: 10px;
  border: 2px solid blueviolet;
  background-color: #fff;
  border-radius: 50%;
`;

function MilestoneCircle() {
  return (
    <OutsideCircle>
      <InsideCircle />
    </OutsideCircle>
  );
}

export default MilestoneCircle;
