import {Link, generatePath} from 'react-router-dom';
import {OfferType} from '../../types/offers';
import cn from 'classnames';
import BtnBookmark from '../btn-bookmark/btn-bookmark';
import {AppRoute, Type} from '../../constants';
import {useLocation} from 'react-router-dom';
import {getRoute} from '../../utils';

type OfferCardProps = {
  offer: OfferType,
  onOfferMouseOver?: (id: number) => void,
  onOfferMouseLeave?: () => void,
}

const OfferCard = ({offer, onOfferMouseOver, onOfferMouseLeave}: OfferCardProps): JSX.Element => {
  const {id, isFavorite, isPremium, previewImage, price, rating, title, type} = offer;
  const {pathname} = useLocation();
  const route = getRoute(pathname);

  const articleClassName = cn('place-card', {
    'cities__card': pathname === AppRoute.Root || route === getRoute(AppRoute.Offer),
    'favorites__card': pathname === AppRoute.Favorites,
  });

  const imageWrapperClassName = cn('place-card__image-wrapper', {
    'cities__image-wrapper': pathname === AppRoute.Root || route === getRoute(AppRoute.Offer),
    'favorites__image-wrapper': pathname === AppRoute.Favorites,
  });

  const cardInfoClassName = cn('place-card__info', {
    'favorites__card-info': pathname === AppRoute.Favorites,
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
            width={pathname === AppRoute.Favorites ? '150' : '260'}
            height={pathname === AppRoute.Favorites ? '110' : '200'}
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
          <BtnBookmark isFavorite={isFavorite} offerID={id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id: `${id}`})}>{title}</Link>
        </h2>
        <p className="place-card__type">{Type[type]}</p>
      </div>
    </article>
  );
};

export default OfferCard;
