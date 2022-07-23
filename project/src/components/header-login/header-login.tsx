import Logo from '../logo/logo';

const HeaderLogin = (): JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo/>
        </div>
      </div>
    </div>
  </header>
);

export default HeaderLogin;
