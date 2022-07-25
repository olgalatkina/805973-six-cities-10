import {Link, generatePath} from 'react-router-dom';
import {OfferType} from '../../types/offers';
import cn from 'classnames';
import {Screen} from '../../constants';
import BtnBookmark from '../btn-bookmark/btn-bookmark';
import {AppRoute} from '../../constants';

type OfferCardProps = {
  offer: OfferType,
  onOfferMouseOver?: (id: number) => void,
  onOfferMouseLeave?: () => void,
  screenClass: string,
}

const OfferCard = ({offer, onOfferMouseOver, onOfferMouseLeave, screenClass}: OfferCardProps): JSX.Element => {
  const {id, isFavorite, isPremium, previewImage, price, rating, title, type} = offer;

  const articleClassName = cn('place-card', {
    'cities__card': screenClass === Screen.common,
    'favorites__card': screenClass === Screen.favorites,
  });

  const imageWrapperClassName = cn('place-card__image-wrapper', {
    'cities__image-wrapper': screenClass === Screen.common,
    'favorites__image-wrapper': screenClass === Screen.favorites,
  });

  const cardInfoClassName = cn('place-card__info', {
    'favorites__card-info': screenClass === Screen.favorites,
  });

  return (
    <article
      className={articleClassName}
      onMouseOver={() => onOfferMouseOver?.(id)}
      onMouseLeave={() => onOfferMouseLeave?.()}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={imageWrapperClassName}>
        <Link to={generatePath(AppRoute.Offer, {id: `${id}`})}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={title}
          />
        </Link>
      </div>
      <div className={cardInfoClassName}>
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

export default OfferCard;
