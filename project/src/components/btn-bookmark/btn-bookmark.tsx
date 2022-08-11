import cn from 'classnames';
import {AppRoute, AuthorizationStatus} from '../../constants';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeFavoriteStatusAction} from '../../store/api-actions';
import {getAuthStatus} from '../../store/user-process/selectors';

type BtnBookmarkProps = {
  isFavorite: boolean;
  offerID: number,
  isBig?: boolean,
}

const BtnBookmark = ({isFavorite, offerID, isBig}: BtnBookmarkProps): JSX.Element => {
  const authStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const btnClassName = cn('button', {
    'place-card__bookmark-button': !isBig,
    'place-card__bookmark-button--active': isFavorite && !isBig,
    'property__bookmark-button': isBig,
    'property__bookmark-button--active': isFavorite && isBig,
  });

  const svgClassName = cn({
    'place-card__bookmark-icon': !isBig,
    'property__bookmark-icon': isBig,
  });

  const onFavoritesBtnClick = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    dispatch(changeFavoriteStatusAction({
      id: offerID,
      status: Number(!isFavorite)
    }));
  };

  return (
    <button
      className={btnClassName}
      type="button"
      onClick={onFavoritesBtnClick}
    >
      <svg
        className={svgClassName}
        style={isFavorite ? {
          stroke: '#4481c3',
          fill: '#4481c3',
        } : {}}
        width={isBig ? '31' : '18'}
        height={isBig ? '33' : '19'}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
};

export default BtnBookmark;
