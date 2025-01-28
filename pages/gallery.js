import Head from "next/head";
import styles from "../styles/gallery.module.css";
import Image from "next/image";
import Socials from "../components/socials";

import { useEffect, useState } from "react";

export default function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images");
        const imageList = await response.json();

        if (Array.isArray(imageList)) {
          setImages(imageList);
        } else {
          console.error("Unexpected API response:", imageList);
          setImages([]);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

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
        {loading ? (
          <p>Loading images...</p>
        ) : images.length === 0 ? (
          <p>Currently there are no photos, check back in later :3!</p>
        ) : (
          <div className={styles.gallery}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  className="photo"
                  src={`/Photos/${image}`}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
