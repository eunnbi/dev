import MilestoneCircle from "./MileStoneCircle";
import { Item, Period, Content } from "./CareerItem.styles";
import { ICareer } from "../../../constants/career";

type CareerItemProps = Pick<ICareer, "content" | "period">;

const CareerItem = ({ period, content }: CareerItemProps) => {
  return (
    <Item>
      <Period>{period}</Period>
      <Content>{content}</Content>
      {/*<MilestoneCircle />*/}
    </Item>
  );
};

export default CareerItem;
