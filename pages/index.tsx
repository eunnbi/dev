import type { NextPage } from "next";
import CustomHead from "../components/common/CustomHead";
import styles from "../styles/Home.module.css";
import KeywordList from "../components/Keywords/KeywordList";

const HomePage: NextPage = () => {
  return (
    <>
      <CustomHead page="Home" />
      <main className={styles.main}>
        <h1>Who is Eunnbi??</h1>
        <KeywordList />
      </main>
    </>
  );
};

export default HomePage;
