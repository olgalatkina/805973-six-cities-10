import styles from './loading.module.css';

type LoadingProps = {
  isButton?: true;
}

const Loading = ({isButton}: LoadingProps): JSX.Element => (
  <div className={styles.container}>
    <div className={`${styles.loading} ${isButton ? styles.loading_btn : ''}`}>
      {!isButton && <h2 className={styles.title}>LOADING</h2>}
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
