import {useState} from 'react';
import {SortOption} from '../../constants';
import cn from 'classnames';
import Header from '../../components/header/header';
import HeaderNav from '../../components/header-nav/header-nav';
import TabsList from '../../components/tabs-list/tabs-list';
import MainEmpty from '../../components/main-no-offers/main-empty';
import Places from '../../components/places/places';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';
import {OffersType} from '../../types/offers';
// import Loading from '../../components/loading/loading';

const sortByOption = (offers: OffersType, activeSortType: string) => {
  switch (activeSortType) {
    case SortOption.Popular:
      return offers;
    case SortOption.LowToHigh:
      return offers.sort((offerA, offerB) => offerA.price - offerB.price);
    case SortOption.HighToLow:
      return offers.sort((offerA, offerB) => offerB.price - offerA.price);
    case SortOption.TopRatedFirst:
      return offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return offers;
  }
};

const MainScreen = (): JSX.Element => {
  const [activeOfferID, setActiveOfferID] = useState<number | null>(null);

  // const isDataLoaded = useAppSelector((state) => state.isDataLoaded);
  const offers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.activeCity);
  const activeSortType = useAppSelector((state) => state.activeSortType);
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);
  const currentOffers = sortByOption(filteredOffers, activeSortType);

  // if (!isDataLoaded) {
  //   return (
  //     <Loading />
  //   );
  // }

  // if (status === OffersStatus.Loading || status === OffersStatus.Idle) {
  //   return (
  //     <Loading />
  //   );
  // }
  //
  // if (status === OffersStatus.Error) {
  //   return (
  //     <SomethingWrong />
  //   );
  // }

  const handleOfferMouseOver = (id: number) => setActiveOfferID(id);
  const handleOfferMouseLeave = () => setActiveOfferID(null);

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
        <div className="cities">{
          currentOffers.length === 0
            ?
            <MainEmpty city={activeCity}/>
            : (
              <div className="cities__places-container container">
                <Places
                  activeCity={activeCity}
                  currentOffers={currentOffers}
                  handleOfferMouseOver={handleOfferMouseOver}
                  handleOfferMouseLeave={handleOfferMouseLeave}
                />
                <div className="cities__right-section">
                  <Map
                    cityInfo={currentOffers[0].city}
                    points={currentOffers}
                    activeOfferID={activeOfferID}
                  />
                </div>
              </div>
            )
        }
        </div>
      </main>
    </>
  );
};

export default MainScreen;
