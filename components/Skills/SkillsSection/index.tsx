import {
  SKILLS_LANG,
  SKILLS_LIB,
  SKILLS_TOOLS,
} from "../../../constants/skills";
import SkillList from "../SkillList";
import SectionHeading from "../../common/SectionHeading";
import styled from "styled-components";

const SkillsSection = () => {
  return (
    <Section>
      <SectionHeading title="Tech Skills" />
      <article>
        <h3>Language</h3>
        <SkillList skills={SKILLS_LANG} />
      </article>
      <article>
        <h3>Libarary &amp; Framework</h3>
        <SkillList skills={SKILLS_LIB} />
      </article>
      <article>
        <h3>Dev Tools</h3>
        <SkillList skills={SKILLS_TOOLS} />
      </article>
    </Section>
  );
};

export default SkillsSection;

const Section = styled.section`
  margin-bottom: 80px;
  article {
    margin-bottom: 50px;
    h3 {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }
  }
`;
