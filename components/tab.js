import styles from './tab.module.css';

export default function Tab({ children }) {
  return <div className={styles.container}>{children}</div>;
}