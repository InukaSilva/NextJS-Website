import Head from "next/head";
import styles from "../styles/main.module.css";
import Image from "next/image";
import Socials from "../components/socials";
import Profile from "../components/profile";
import Bio from "../components/bio";
import Tab from "../components/tab";

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <title>Inuka's Portfolio Home Page</title>
      </Head>

      <div className={styles.top}>
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
          <a
            className={styles.text}
            href="https://github.com/InukaSilva?tab=repositories"
          >
            Projects ↗
          </a>

          <a className={styles.text} href="gallery">
            Gallery ↗
          </a>

          <a className={styles.text} href="/Inuka_s_Resume.pdf">
            Resume ↗
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
        </Tab>
      </div>
    </div>
  );
}
