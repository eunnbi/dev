import Heading from "../common/Heading";
import { SKILLS_LANG, SKILLS_LIB, SKILLS_TOOLS } from "./skills";
import SkillList from "./SkillList";

const SkillsSection = () => {
  return (
    <section>
      <Heading level={2}>
        Tech <span>Skills</span>
      </Heading>
      <article>
        <Heading level={3}>Langauge</Heading>
        <SkillList skills={SKILLS_LANG} />
      </article>
      <article>
        <Heading level={3}>Libarary &amp; Framework</Heading>
        <SkillList skills={SKILLS_LIB} />
      </article>
      <article>
        <Heading level={3}>Dev Tools</Heading>
        <SkillList skills={SKILLS_TOOLS} />
      </article>
    </section>
  );
};

export default SkillsSection;
