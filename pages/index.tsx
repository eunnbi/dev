import type { NextPage } from "next";
import CustomHead from "../components/common/CustomHead";
import { Button } from "../components/common/Button";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <CustomHead page="Home" />
      <main className={styles.main}>
        <h1>Hi, I'm Eunbi Kang. Welcome to my portfolio 👋</h1>
        <p className={styles.motto}>
          Learn from yesterday and live for today. The most important thing is
          not to stop asking questions. <br />
          - Albert Einstein - <br />
        </p>
        <p className={styles.content}>
          The above is my life motto.💬 <br />
          <span>
            Through questions❓, I am growing steadily🌱 and creating a web with
            good user experience.👥
          </span>
        </p>
        <div className={styles.buttonBox}>
          <Button>
            <Link href="/about">
              <a>Explore More About Me</a>
            </Link>
          </Button>
          <Button>
            <Link href="/projects">
              <a>Go to My Projects</a>
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;
