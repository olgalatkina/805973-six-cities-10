import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../constants';
import HeaderLogin from '../../components/header-login/header-login';
import FormLogin from '../../components/form-login/form-login';
import {CITIES} from '../../constants';
import {changeActiveCity} from '../../store/action';
import {useAppDispatch} from '../../hooks';

const LoginScreen = () => {
  const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
  const dispatch = useAppDispatch();

  return (
    <>
      <HeaderLogin/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <FormLogin/>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={generatePath(AppRoute.Root)}
                onClick={() => dispatch(changeActiveCity(randomCity))}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default LoginScreen;
