import Heading from "@/components/common/Heading";
import { CAREER } from "data/career";
import styled from "styled-components";

export default function CareerSection() {
  return (
    <Section>
      <Heading title="Career & Experience" />
      <ol>
        {CAREER.map(({ id, period, content }) => (
          <Item key={id}>
            <p className="period">{period}</p>
            <p className="content">{content}</p>
          </Item>
        ))}
      </ol>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 1rem 0.6rem;
  gap: 15px;
  .period {
    font-size: 1rem;
    color: #828282;
  }
  .content {
    text-align: center;
    font-size: 1.2rem;
  }
`;
