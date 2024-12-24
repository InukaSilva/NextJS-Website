import Head from "next/head";
import styles from "../styles/gallery.module.css";
import Image from "next/image";
import Socials from "../components/socials";


export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Inuka's Portfolio Home Page</title>
        <link rel="icon" href="/favicon.ico" />
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
        <a>Currently Working on getting this up and running... sorry :3</a>
      </div>
    </div>
  );
}
