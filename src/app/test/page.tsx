import styles from "./page.module.css";

export default function Test() {
  return (
    <div className={styles.page}>
      <div className={styles.scroller}>
        <div className={styles.stickyHeader}>Test page</div>
        <div className={styles.scrollingContent}>blah</div>
      </div>
    </div>
  );
}
