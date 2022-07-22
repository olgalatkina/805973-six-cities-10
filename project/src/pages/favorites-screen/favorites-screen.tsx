import {OffersType} from '../../types/offers';
import FavoritesScreenEmpty from '../favorites-screen-empty/favorites-screen-empty';
import Footer from '../../components/footer/footer';
import FavoritesItem from '../../components/favorites-item/favorites-item';

type FavoritesScreenProps = {
  offers: OffersType,
}

type OffersIndexType = {
  [key: string]: OffersType,
}

const indexOffersByCities = (offers: OffersType): OffersIndexType => (
  offers.reduce((acc: OffersIndexType, offer) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {})
);

const FavoritesScreen = ({offers}: FavoritesScreenProps): JSX.Element => {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  if (favoritesOffers.length === 0) {
    return <FavoritesScreenEmpty/>;
  }

  const indexedOffers = indexOffersByCities(offers);
  const cities = Object.keys(indexedOffers);

  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => <FavoritesItem cityName={city} localOffers={indexedOffers[city]} key={city}/>)}
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default FavoritesScreen;
