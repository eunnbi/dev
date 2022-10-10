import Image from "next/image";
import GaugeBar from "../GaugeBar";
import { ISkill } from "../../../constants/skills";
import { Item, Heading, Info, ImageWrapper } from "./SkillItem.styles";

const SkillItem = ({ id, tech, percentage, link }: ISkill) => {
  return (
    <Item>
      <ImageWrapper>
        <Image
          src={`/images/skills/${id}.png`}
          layout="fill"
          placeholder="blur"
          blurDataURL={`/images/skills/${id}.png`}
        />
      </ImageWrapper>

      <Info>
        <Heading>{tech}</Heading>
      </Info>
    </Item>
  );
};

export default SkillItem;
