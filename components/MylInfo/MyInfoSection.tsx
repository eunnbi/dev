import { MY_INFO } from "./info";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  max-width: 1000px;
  p:first-child {
    color: blueviolet;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 1rem;
`;

const MyInfoSection = () => {
  return (
    <Section>
      {MY_INFO.map((info, index) => (
        <Info key={index}>
          <p>{info.label}</p>
          <p>{info.value}</p>
        </Info>
      ))}
    </Section>
  );
};

export default MyInfoSection;
