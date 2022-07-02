import Heading from "../../common/Heading";
import MilestoneCircle from "../MileStoneCircle";
import { Item, Period, Content } from "./CareerItem.styles";

interface CareerItemProps {
  title: string;
  period: string;
  content: string;
}

const CareerItem = ({ title, period, content }: CareerItemProps) => {
  return (
    <Item>
      <Period>{period}</Period>
      <Content>
        <Heading level={3}>{title}</Heading>
        <p>{content}</p>
        <MilestoneCircle />
      </Content>
    </Item>
  );
};

export default CareerItem;
