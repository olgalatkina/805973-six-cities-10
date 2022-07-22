import {useState, useEffect} from 'react';
import {OffersType} from '../../types/offers';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
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
  const [isEmpty, setIsEmpty] = useState(true);
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);

  useEffect(() => {
    if (favoritesOffers.length !== 0) {
      setIsEmpty(false);
    }
  }, [isEmpty]);

  const indexedOffers = indexOffersByCities(offers);

  return (
    <>
      <main className={`page__main page__main--favorites ${isEmpty ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${isEmpty ? 'favorites--empty' : ''}`}>
            <h1 className={isEmpty ? 'visually-hidden' : 'favorites__title'}>Saved listing</h1>
            {isEmpty
              ? <FavoritesEmpty />
              :
              <ul className="favorites__list">
                {Object.entries(indexedOffers).map(([city, localOffers]) => <FavoritesItem cityName={city} localOffers={localOffers} key={city}/>)}
              </ul>}
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default FavoritesScreen;
