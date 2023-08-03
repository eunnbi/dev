import { SKILLS_LANG, SKILLS_LIB, SKILLS_TOOLS } from "data/skills";
import SkillList from "./SkillList";
import styled from "styled-components";
import Heading from "@/components/common/Heading";

export default function SkillSection() {
  return (
    <Section>
      <Heading title="Tech Skills" />
      <div className="article-wrapper">
        <article>
          <h2 className="article-title">Language</h2>
          <SkillList skills={SKILLS_LANG} />
        </article>
        <article>
          <h2 className="article-title">Library &amp; Framework</h2>
          <SkillList skills={SKILLS_LIB} />
        </article>
        <article>
          <h2 className="article-title">Dev Tools</h2>
          <SkillList skills={SKILLS_TOOLS} />
        </article>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .article-wrapper {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .article-title {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
`;
