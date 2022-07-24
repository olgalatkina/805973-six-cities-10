import {useEffect, useState} from 'react';
import {cities} from '../../constants';
import {OffersType} from '../../types/offers';
import {UserType} from '../../types/user';
import cn from 'classnames';
import Header from '../../components/header/header';
import TabItem from '../../components/tab-item/tab-item';
import OffersList from '../../components/offers-list/offers-list';
import FormSorting from '../../components/form-sorting/form-sorting';
import MainEmpty from '../../components/main-no-offers/main-empty';

type MainScreenProps = {
  offers: OffersType,
  user: UserType,
}

const filterOffersByCity = (offers: OffersType, city: string): OffersType => (
  offers.filter((offer) => offer.city.name === city)
);

const MainScreen = ({offers, user}: MainScreenProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState('');
  const [filteredOffers, setFilteredOffers] = useState<OffersType>([]);

  useEffect(() => {
    setActiveTab('Amsterdam');
    setFilteredOffers(filterOffersByCity(offers, 'Amsterdam'));
  }, []);

  const handleTabClick = (city: string) => {
    setActiveTab(city);
    setFilteredOffers(filterOffersByCity(offers, city));
  };

  const getTitle = (numberOfOffers: number) => (
    `${numberOfOffers} ${numberOfOffers === 1 ? 'place' : 'places'} to stay in ${activeTab}`
  );

  const mainClassName = cn('page__main page__main--index', {
    'page__main--index-empty': filteredOffers.length === 0,
  });

  return (
    <>
      <Header user={user}/>
      <main className={mainClassName}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) => (
                <TabItem
                  city={city}
                  key={city}
                  onTabClick={handleTabClick}
                  activeTab={activeTab}
                />))}
            </ul>
          </section>
        </div>
        <div className="cities">{
          filteredOffers.length === 0
            ?
            <MainEmpty city={activeTab}/>
            :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{getTitle(filteredOffers.length)}</b>
                <FormSorting/>
                <OffersList offers={filteredOffers}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"/>
              </div>
            </div>
        }
        </div>
      </main>
    </>
  );
};

export default MainScreen;
