import SectionHeading from "../../common/SectionHeading";
import CareerList from "../CareerList";
import styled from "styled-components";

const CareerSection = () => {
  return (
    <Section>
      <SectionHeading title="Career & Experience" />
      <CareerList />
    </Section>
  );
};

export default CareerSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
