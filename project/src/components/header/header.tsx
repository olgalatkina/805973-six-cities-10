import Logo from '../logo/logo';

type HeaderProps = {
  children?: JSX.Element,
}

const Header = ({children}: HeaderProps): JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo/>
        </div>
        {children}
      </div>
    </div>
  </header>
);

export default Header;
