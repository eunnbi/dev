import type { NextPage } from "next";
import CustomHead from "../components/common/CustomHead";
import styles from "../styles/Home.module.css";
import KeywordSlider from "../components/Keywords/KeywordsSlider";

const HomePage: NextPage = () => {
  return (
    <>
      <CustomHead page="Home" />
      <main className={styles.main}>
        <h1>Who is Eunnbi??</h1>
        <KeywordSlider />
      </main>
    </>
  );
};

export default HomePage;
