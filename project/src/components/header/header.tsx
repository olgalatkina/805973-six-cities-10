import {useState} from 'react';
import {Link} from 'react-router-dom';
import {UserType} from '../../types/user';
import {AppRoute} from '../../constants';
import Logo from '../logo/logo';
import UserInfo from '../user-info/user-info';

type HeaderProps = {
  user: UserType,
}

// TODO: убрать eslint-disable-next-line

const Header = ({user}: HeaderProps): JSX.Element => {
  const [isAuth,] = useState(true);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuth && <UserInfo user={user}/>}
              <li className="header__nav-item">
                {!isAuth && <div className="header__avatar-wrapper user__avatar-wrapper" />}
                <Link to={AppRoute.Login} className="header__nav-link">
                  <span className="header__signout">{isAuth ? 'Sign out' : 'Sign in'}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
