import styles from './socials.module.css';

export default function Socials({ children }) {
  return <div className={styles.container}>{children}</div>;
}