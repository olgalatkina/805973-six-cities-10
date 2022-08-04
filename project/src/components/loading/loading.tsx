import styles from './loading.module.css';

// флаг isButton

const Loading = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.loading}>
      <h2 className={styles.title}>LOADING</h2>
      <span className={styles.dot}/>
      <span className={styles.dot}/>
      <span className={styles.dot}/>
      <span className={styles.dot}/>
      <span className={styles.dot}/>
      <span className={styles.dot}/>
      <span className={styles.dot}/>
    </div>
  </div>
);

export default Loading;
