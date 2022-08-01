import Heading from "../../common/Heading";
import MilestoneCircle from "./MileStoneCircle";
import { Item, Period, Content } from "./CareerItem.styles";
import { ICareer } from "../../../constants/career";

type CareerItemProps = Pick<ICareer, "content" | "period" | "title">;

const CareerItem = ({ title, period, content }: CareerItemProps) => {
  return (
    <Item>
      <Period>
        <p>{period}</p>
      </Period>
      <Content>
        <Heading level={3}>{title}</Heading>
        <p>{content}</p>
        <MilestoneCircle />
      </Content>
    </Item>
  );
};

export default CareerItem;
