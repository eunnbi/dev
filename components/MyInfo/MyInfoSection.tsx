import { MY_INFO } from "./info";
import styled from "styled-components";
import { icons } from "react-icons";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  max-width: 1000px;
`;

const Info = styled.div`
  display: flex;
  gap: 1rem;
  a:hover {
    text-decoration: underline;
  }
`;

const Label = styled.p`
  color: ${({ theme }) => theme.color.violet};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const MyInfoSection = () => {
  return (
    <Section>
      {MY_INFO.map((info, index) => (
        <Info key={index}>
          <Label>{info.label}</Label>
          {info.label === "E-mail" ? (
            <a href={`mailto:${info.value}`} title="메일 보내기">
              <p>{info.value}</p>
            </a>
          ) : (
            <p>{info.value}</p>
          )}
        </Info>
      ))}
    </Section>
  );
};

export default MyInfoSection;
