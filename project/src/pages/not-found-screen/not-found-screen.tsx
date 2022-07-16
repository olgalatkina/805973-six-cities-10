import {Link} from 'react-router-dom';
import styles from './not-found-screen.module.css';

const NotFoundScreen = () => (
  <main className="page__main">
    <div className="container">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>404 Page Not Found</h1>
        <Link to="/" className={styles.link}>Home&nbsp;&rarr;</Link>
      </div>
    </div>
  </main>
);

export default NotFoundScreen;
