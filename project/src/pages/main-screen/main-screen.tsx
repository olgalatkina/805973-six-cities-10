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

const MainScreen = ({offers, user}: MainScreenProps): JSX.Element => (
  <>
    <Header user={user}/>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => <TabItem city={city} key={Math.random()}/>)}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
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

export default MainScreen;
