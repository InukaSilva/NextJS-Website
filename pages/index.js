import Head from "next/head";
import styles from "../styles/main.module.css";
import Image from "next/image";
import Socials from "../components/socials";
import Profile from "../components/profile";
import Bio from "../components/bio";
import Tab from "../components/tab";
import { useEffect, useState } from "react";

export default function Home() {
  {
    /* This Section is used to get the text from the status.txt file so it can change the text on screen */
  }

  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/getText");
      const data = await res.json();
      if (data.content) {
        setLines(data.content);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (lines.length > 0) {
      const interval = setInterval(() => {
        setCurrentLine((prevLine) => (prevLine + 1) % lines.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [lines]);

  return (
    <div className={styles.page}>
      {/* Used to change teh */}
      <Head>
        <title>Inuka's Portfolio Home Page</title>
      </Head>

      <div className={styles.top}>
        {/* this section is for content on the left side of the screen - the social icons*/}
        <Socials>
          <a className={styles.home} href="/">
            <Image
              src="/Home.png"
              width={40}
              height={40}
              alt="Picture of the GitHub Icon"
            />
          </a>

          <a className={styles.icon} href="https://github.com/InukaSilva">
            <Image
              src="/Github.jpg"
              width={40}
              height={40}
              alt="Picture of the GitHub Icon"
            />
          </a>

          <a
            className={styles.icon}
            href="https://ca.linkedin.com/in/inuka-silva-a367a8244"
          >
            <Image
              src="/Linkedin.png"
              width={40}
              height={40}
              alt="Picture of the LinkedIn Icon"
            />
          </a>
        </Socials>
      </div>

      <div className={styles.maincontent}>
        <Profile>
          <a className={styles.img}>
            <Image
              src="/profile.JPG"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </a>

          <a className={styles.text} href="/Inuka_s_Resume.pdf">
            Resume ↗
          </a>

          <h3 className={styles.header}>Currently:</h3>
          <a className={styles.status}>{lines[currentLine]}</a>
        </Profile>

        <Bio>
          <h3 className={styles.text}>Hello there!</h3>

          <p className={styles.paragraph}>
            My name is Inuka Silva! I am currently a first year student at the
            UTM (University of Toronto Mississauga). If I am not catching up on
            sleep, you can find me participating in all my hobbies such as:
            Robotics, Programming, Gaming, Music, and more!
          </p>
        </Bio>

        <Tab>
          <a className={styles.text} href="gallery">
            Gallery ↗
          </a>

          <a className={styles.text} href="https://inuka-silva.itch.io/">
            Games ↗
          </a>

          <a
            className={styles.text}
            href="https://inukasilva-pid-visualizer-main-ko2ed1.streamlit.app/"
          >
            PID Visualizer ↗
          </a>

          <a className={styles.text} href="blog">
            Blog ↗
          </a>

          <a
            className={styles.text}
            href="https://github.com/InukaSilva?tab=repositories"
          >
            Projects ↗
          </a>
        </Tab>
      </div>
    </div>
  );
}
