import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';
import {useAppSelector} from '../../hooks';
import cn from 'classnames';
import styles from './styles.module.css';

const UserInfo = (): JSX.Element => {
  const {user, favorites} = useAppSelector((state) => state);

  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Favorites}
      >
        <div
          style={{
            backgroundImage: `url(${user && user.avatarUrl})`,
          }}
          className={cn('header__avatar-wrapper user__avatar-wrapper', styles.avatar)}
        />
        <span className="header__user-name user__name">{user && user.email}</span>
        <span className="header__favorite-count">{favorites.length}</span>
      </Link>
    </li>
  );
};

export default UserInfo;
