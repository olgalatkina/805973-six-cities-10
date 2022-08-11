import {Link} from 'react-router-dom';
import {OffersType} from '../../types/offers';
import OfferCard from '../offer-card/offer-card';
import {AppRoute} from '../../constants';
import {useAppDispatch} from '../../hooks';
import {changeActiveCity} from '../../store/app-process/app-process';

type FavoritesItemProps ={
  cityName: string,
  localOffers: OffersType,
}

const FavoritesItem = ({cityName, localOffers}: FavoritesItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.Root}
            onClick={() => dispatch(changeActiveCity(cityName))}
          >
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {localOffers.map((offer) => <OfferCard offer={offer} key={offer.id}/>)}
      </div>
    </li>
  );
};

export default FavoritesItem;
