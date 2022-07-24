import {useEffect, useState} from 'react';
import {cities} from '../../constants';
import {OffersType} from '../../types/offers';
import {UserType} from '../../types/user';

import Header from '../../components/header/header';
import TabItem from '../../components/tab-item/tab-item';
import OffersList from '../../components/offers-list/offers-list';
import FormSorting from '../../components/form-sorting/form-sorting';

type MainScreenProps = {
  offers: OffersType,
  user: UserType,
}

const filterOffersByCity = (offers: OffersType, city: string): OffersType => offers.filter((offer) => offer.city.name === city);

const MainScreen = ({offers, user}: MainScreenProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState('');
  const [numberOfOffers, setNumberOfOffers] = useState(0);

  useEffect(() => {
    setActiveTab('Amsterdam');
    setNumberOfOffers(filterOffersByCity(offers, 'Amsterdam').length);
  }, []);

  const handleTabClick = (city: string) => {
    setActiveTab(city);
    setNumberOfOffers(filterOffersByCity(offers, city).length);
  };

  const getTitle = (numberOfCities: number) => (
    `${numberOfCities} ${numberOfCities === 1 ? 'place' : 'places'} to stay in ${activeTab}`
  );

  return (
    <>
      <Header user={user}/>
      <main className="page__main page__main--index">
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
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{getTitle(numberOfOffers)}</b>
              <FormSorting/>
              <OffersList offers={offers}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainScreen;
