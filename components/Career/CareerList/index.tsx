import { CAREER } from "../../../constants/career";
import CareerItem from "../CareerItem";
import styled from "styled-components";

const CareerList = () => {
  return (
    <List>
      {CAREER.map((career) => (
        <CareerItem
          key={career.id}
          content={career.content}
          period={career.period}
        />
      ))}
    </List>
  );
};

export default CareerList;

const List = styled.ol`
  position: relative;
`;

const Divider = styled.div`
  position: absolute;
  top: 0;
  left: 10rem;
  width: 1px;
  height: 100%;
  background-color: lightgray;
  @media ${({ theme }) => theme.device.laptop} {
    left: 6.5rem;
  }
`;
