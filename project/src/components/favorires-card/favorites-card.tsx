import {Link, generatePath} from 'react-router-dom';
import {AppRoute} from '../../constants';
import {OfferType} from '../../types/offers';
import BtnBookmark from '../btn-bookmark/btn-bookmark';

type FavoritesCardProps = {
  offer: OfferType,
}

const FavoritesCard = ({offer}: FavoritesCardProps): JSX.Element => {
  const {isPremium, id, isFavorite, previewImage, title, price, rating, type} = offer;

  return (
    <article className="place-card favorites__card">
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="place-card__image-wrapper favorites__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, {id: `${id}`})}>
          <img
            className="place-card__image"
            src={previewImage}
            width="150"
            height="110"
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info favorites__card-info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BtnBookmark isFavorite={isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id: `${id}`})}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default FavoritesCard;
