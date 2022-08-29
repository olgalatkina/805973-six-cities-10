import cn from 'classnames';
import { Status } from '../../constants';
import Header from '../../components/header/header';
import HeaderNav from '../../components/header-nav/header-nav';
import TabsList from '../../components/tabs-list/tabs-list';
import Cities from '../../components/cities/cities';
import Loading from '../../components/loading/loading';
import SomethingWrong from '../../components/something-wrong/something-wrong';
import { useAppSelector } from '../../hooks';
import { getStatusAll, getSortedOffers } from '../../store/offers-data/selectors';

const MainScreen = (): JSX.Element => {
  const status = useAppSelector(getStatusAll);
  const currentOffers = useAppSelector(getSortedOffers);

  if (status === Status.Loading || status === Status.Idle) {
    return (
      <Loading />
    );
  }

  if (status === Status.Error) {
    return (
      <SomethingWrong />
    );
  }

  const mainClassName = cn('page__main page__main--index', {
    'page__main--index-empty': Boolean(currentOffers.length),
  });

  return (
    <>
      <Header>
        <HeaderNav />
      </Header>
      <main className={mainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <TabsList />
          </section>
        </div>
        <Cities currentOffers={currentOffers}/>
      </main>
    </>
  );
};

export default MainScreen;
