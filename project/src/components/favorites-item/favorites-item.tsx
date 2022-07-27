import {Link} from 'react-router-dom';
import {OffersType} from '../../types/offers';
import {Screen} from '../../constants';
import OfferCard from '../offer-card/offer-card';
import {AppRoute} from '../../constants';
// import FavoritesCard from "../favorires-card/favorites-card";

type FavoritesItemProps ={
  cityName: string,
  localOffers: OffersType,
}

const FavoritesItem = ({cityName, localOffers}: FavoritesItemProps): JSX.Element => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={AppRoute.Root}>
          <span>{cityName}</span>
        </Link>
      </div>
    </div>
    <div className="favorites__places">
      {localOffers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} screenClass={Screen.favorites}/>
        // <FavoritesCard offer={offer} key={offer.id}/>
        // FavoritesCard оставила, чтобы ты мог сравнить
      ))}
    </div>
  </li>
);

export default FavoritesItem;
