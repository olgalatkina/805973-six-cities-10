import {useState} from 'react';
import {CITIES} from '../../constants';
import cn from 'classnames';
import {Screen} from '../../constants';
import Header from '../../components/header/header';
import TabItem from '../../components/tab-item/tab-item';
import OffersList from '../../components/offers-list/offers-list';
import FormSorting from '../../components/form-sorting/form-sorting';
import MainEmpty from '../../components/main-no-offers/main-empty';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';

const MainScreen = (): JSX.Element => {
  const [activeOfferID, setActiveOfferID] = useState<number | null>(null);

  const offers = useAppSelector((state) => state.offers);
  const activeTab = useAppSelector((state) => state.activeTab);
  const filteredOffers = offers.filter((offer) => offer.city.name === activeTab);
  const user = useAppSelector((state) => state.user);

  const handleOfferMouseOver = (id: number) => setActiveOfferID(id);
  const handleOfferMouseLeave = () => setActiveOfferID(null);

  const getTitle = (numberOfOffers: number) => (
    `${numberOfOffers} ${numberOfOffers === 1 ? 'place' : 'places'} to stay in ${activeTab}`
  );

  const mainClassName = cn('page__main page__main--index', {
    'page__main--index-empty': Boolean(filteredOffers.length),
  });

  return (
    <>
      <Header user={user}/>
      <main className={mainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
                <TabItem
                  city={city}
                  key={city}
                />))}
            </ul>
          </section>
        </div>
        <div className="cities">{
          filteredOffers.length === 0
            ?
            <MainEmpty city={activeTab}/>
            : (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{getTitle(filteredOffers.length)}</b>
                  <FormSorting/>
                  <OffersList
                    offers={filteredOffers}
                    onOfferMouseOver={handleOfferMouseOver}
                    onOfferMouseLeave={handleOfferMouseLeave}
                    screenClass={Screen.main}
                  />
                </section>
                <div className="cities__right-section">
                  <Map
                    cityInfo={filteredOffers[0].city}
                    points={filteredOffers}
                    activeOfferID={activeOfferID}
                    screenClass={Screen.main}
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
