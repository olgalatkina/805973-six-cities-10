import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';
import Logo from '../logo/logo';
import UserInfo from '../user-info/user-info';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {logoutAction} from '../../store/api-actions';

const Header = (): JSX.Element => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuth && <UserInfo />}
              <li className="header__nav-item">
                {!isAuth && <div className="header__avatar-wrapper user__avatar-wrapper" />}
                {!isAuth
                  ?
                  <Link to={AppRoute.Login} className="header__nav-link" >
                    <span className="header__signout">Sign in</span>
                  </Link>
                  :
                  <Link
                    to={AppRoute.Login}
                    className="header__nav-link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      dispatch(logoutAction());
                    }}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
