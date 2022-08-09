import cn from 'classnames';
import {AppRoute, AuthorizationStatus} from '../../constants';
import {useLocation, useNavigate} from 'react-router-dom';
import {getRoute} from '../../utils';
import {useAppDispatch, useAppSelector} from '../../hooks';
// import {changeFavoriteStatusAction} from '../../store/api-actions';

type BtnBookmarkProps = {
  isFavorite: boolean;
  offerID: number,
}

const BtnBookmark = ({isFavorite, offerID}: BtnBookmarkProps): JSX.Element => {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const route = getRoute(pathname);

  const btnClassName = cn('button', {
    'place-card__bookmark-button': route !== getRoute(AppRoute.Offer),
    'place-card__bookmark-button--active': isFavorite && route !== getRoute(AppRoute.Offer),
    'property__bookmark-button': route === getRoute(AppRoute.Offer),
    'property__bookmark-button--active': isFavorite && route === getRoute(AppRoute.Offer),
  });

  const svgClassName = cn({
    'place-card__bookmark-icon': route !== getRoute(AppRoute.Offer),
    'property__bookmark-icon': route === getRoute(AppRoute.Offer),
  });

  const onFavoritesBtnClick = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    // dispatch(changeFavoriteStatusAction({
    //   id: offerID,
    //   status: Number(!isFavorite)
    // }));
  };

  return (
    <button
      className={btnClassName}
      type="button"
      onClick={onFavoritesBtnClick}
    >
      <svg
        className={svgClassName}
        width={route === getRoute(AppRoute.Offer) ? '31' : '18'}
        height={route === getRoute(AppRoute.Offer) ? '33' : '19'}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
};

export default BtnBookmark;
