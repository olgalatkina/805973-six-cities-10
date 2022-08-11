import cn from 'classnames';
import styles from './something-wrong.module.css';

const SomethingWrong = (): JSX.Element => (
  <main className="page__main page__main--favorites page__main--favorites-empty">
    <div className="page__favorites-container container">
      <section className="favorites favorites--empty">
        <h1 className="visually-hidden">Something went wrong</h1>
        <div className={cn('wrapper', styles.wrapper)}>
          <b className="favorites__status">Something went wrong.</b>
          <p className="favorites__status-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <button className={styles.button} onClick={() => window.location.reload()}>Click to reload!</button>
        </div>
      </section>
    </div>
  </main>
);

export default SomethingWrong;
