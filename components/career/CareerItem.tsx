import styled from "styled-components";
import { ICareer } from "../../constants/career";

type CareerItemProps = Pick<ICareer, "content" | "period">;

const CareerItem = ({ period, content }: CareerItemProps) => {
  return (
    <Item>
      <Period>{period}</Period>
      <Content>{content}</Content>
    </Item>
  );
};

export default CareerItem;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 1rem 0.6rem;
  gap: 15px;
  h3 {
    font-size: 1.3rem;
  }
`;

const Period = styled.p`
  font-size: 1rem;
  color: #828282;
`;

const Content = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;
