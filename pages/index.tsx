import type { NextPage } from "next";
import Link from "next/link";
import CustomHead from "../components/common/CustomHead";
import { Button } from "../components/common/Button";
import styles from "../styles/Home.module.css";
import KeywordsSection from "../components/Keywords/KeywordsSection";

const Home: NextPage = () => {
  return (
    <>
      <CustomHead page="Home" />
      <main className={styles.main}>
        <KeywordsSection />
        <div className={styles.buttonBox}>
          <Button>
            <Link href="/about">
              <a>🔎 Explore More About Me</a>
            </Link>
          </Button>
          <Button>
            <Link href="/projects">
              <a>👉 Go to My Projects</a>
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;
