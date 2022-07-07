import styled from "styled-components";

const OutsideCircle = styled.div`
  position: absolute;
  top: 1.5rem;
  left: -7px;
  width: 14px;
  height: 14px;
  background-color: ${({ theme }) => theme.color.lightPurple};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media ${({ theme }) => theme.device.mobile}, (max-height: 800px) {
    width: 10px;
    height: 10px;
    left: -5px;
  }
`;

const InsideCircle = styled.div`
  width: 10px;
  height: 10px;
  border: 2px solid blueviolet;
  background-color: ${({ theme }) => theme.color.bgColor};
  border-radius: 50%;
  @media ${({ theme }) => theme.device.mobile}, (max-height: 800px) {
    width: 6px;
    height: 6px;
    border-width: 1px;
  }
`;

function MilestoneCircle() {
  return (
    <OutsideCircle>
      <InsideCircle />
    </OutsideCircle>
  );
}

export default MilestoneCircle;
