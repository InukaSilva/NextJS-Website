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
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <title>Gallery</title>
      </Head>

      <div className={styles.top}>
        <Socials>
          <a className={styles.home} href="/">
            <Image src="/Home.png" width={40} height={40} alt="Home Icon" />
          </a>

          <a className={styles.icon} href="https://github.com/InukaSilva">
            <Image src="/Github.jpg" width={40} height={40} alt="GitHub Icon" />
          </a>

          <a
            className={styles.icon}
            href="https://ca.linkedin.com/in/inuka-silva-a367a8244"
          >
            <Image
              src="/Linkedin.png"
              width={40}
              height={40}
              alt="LinkedIn Icon"
            />
          </a>
        </Socials>
      </div>

      <div className={styles.maincontent}>
        {/* Column 1 */}
        <div className={styles.column1}>
          {loading ? (
            <p>Loading images...</p>
          ) : images.length === 0 ? (
            <p>Currently there are no photos, check back in later :3!</p>
          ) : (
            images
              .filter((image) => {
                const imageNumber = parseInt(image.split(".")[0], 10); // Extract the number from filename like '1.jpg'
                return imageNumber % 3 === 1; // Place images where number % 3 === 1
              })
              .map((image, index) => (
                <div key={index}>
                  <img
                    className="photo"
                    src={`/Photos/${image}`}
                    alt={`Image ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))
          )}
        </div>

        {/* Column 2 */}
        <div className={styles.column2}>
          {loading ? (
            <p>Loading images...</p>
          ) : images.length === 0 ? (
            <p>Currently there are no photos, check back in later :3!</p>
          ) : (
            images
              .filter((image) => {
                const imageNumber = parseInt(image.split(".")[0], 10);
                return imageNumber % 3 === 2; // Place images where number % 3 === 2
              })
              .map((image, index) => (
                <div key={index}>
                  <img
                    className="photo"
                    src={`/Photos/${image}`}
                    alt={`Image ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))
          )}
        </div>

        {/* Column 3 */}
        <div className={styles.column3}>
          {loading ? (
            <p>Loading images...</p>
          ) : images.length === 0 ? (
            <p>Currently there are no photos, check back in later :3!</p>
          ) : (
            images
              .filter((image) => {
                const imageNumber = parseInt(image.split(".")[0], 10);
                return imageNumber % 3 === 0; // Place images where number % 3 === 0
              })
              .map((image, index) => (
                <div key={index}>
                  <img
                    className="photo"
                    src={`/Photos/${image}`}
                    alt={`Image ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}
