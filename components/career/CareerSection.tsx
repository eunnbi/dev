import Heading from "../common/Heading";
import CareerList from "./CareerList";
import styled from "styled-components";

const CareerSection = () => {
  return (
    <Section>
      <Heading title="Career & Experience" />
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
