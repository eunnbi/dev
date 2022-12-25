import { SKILLS_LANG, SKILLS_LIB, SKILLS_TOOLS } from "@data/skills";
import SkillList from "./SkillList";
import styled from "styled-components";
import Heading from "@components/common/Heading";

const SkillsSection = () => {
  return (
    <Section>
      <Heading title="Tech Skills" />
      <div>
        <article>
          <h3>Language</h3>
          <SkillList skills={SKILLS_LANG} />
        </article>
        <article>
          <h3>Library &amp; Framework</h3>
          <SkillList skills={SKILLS_LIB} />
        </article>
        <article>
          <h3>Dev Tools</h3>
          <SkillList skills={SKILLS_TOOLS} />
        </article>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  article {
    margin-bottom: 50px;
    h3 {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }
  }
`;

export default SkillsSection;
