import type { NextPage } from "next";
import CustomHead from "../components/common/CustomHead";
import Heading from "../components/common/Heading";
import styles from "../styles/About.module.css";

const About: NextPage = () => {
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
      </main>
    </>
  );
};

export default About;
