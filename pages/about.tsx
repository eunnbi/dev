import type { NextPage } from "next";
import CareerSection from "../components/Career/CareerSection";
import CustomHead from "../components/common/CustomHead";
import Heading from "../components/common/Heading";
import MyInfoSection from "../components/MyInfo/MyInfoSection";
import SkillsSection from "../components/Skills/SkillsSection";
import styles from "../styles/About.module.css";

const AboutPage: NextPage = () => {
  return (
    <>
      <CustomHead page="About" />
      <main>
        <Heading>
          About <span>Me</span>
        </Heading>
        <p className={styles.introduction}>
          Through questions❓, I am growing steadily🌱 and creating a web with
          good user experience.👥
        </p>
        <MyInfoSection />
        <div className={styles.row}>
          <SkillsSection />
          <CareerSection />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
