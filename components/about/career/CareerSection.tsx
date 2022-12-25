import Heading from "@components/common/Heading";
import { CAREER } from "@data/career";
import styled from "styled-components";

const CareerSection = () => {
  return (
    <Section>
      <Heading title="Career & Experience" />
      <ol>
        {CAREER.map(career => (
          <CareerItem
            key={career.id}
            content={career.content}
            period={career.period}
          />
        ))}
      </ol>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CareerItem = ({
  period,
  content
}: Pick<Career, "content" | "period">) => {
  return (
    <Item>
      <p className="CareerItem_Period">{period}</p>
      <p className="CareerItem_Content">{content}</p>
    </Item>
  );
};

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
  .CareerItem_period {
    font-size: 1rem;
    color: #828282;
  }
  .CareerItem_Content {
    text-align: center;
    font-size: 1.2rem;
  }
`;

export default CareerSection;
