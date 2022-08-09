import {generatePath, Link, Navigate } from 'react-router-dom';
import {changeActiveCity} from '../../store/app-process/app-process';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus, CITIES} from '../../constants';
import Header from '../../components/header/header';
import FormLogin from '../../components/form-login/form-login';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const {authorizationStatus} = useAppSelector((state) => state);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <Navigate to={AppRoute.Root} />
    );
  }

  const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];

  return (
    <>
      <Header />
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
