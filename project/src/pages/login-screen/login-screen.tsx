import {generatePath, Link, Navigate } from 'react-router-dom';
import {AppRoute, AuthorizationStatus, CITIES} from '../../constants';
import HeaderLogin from '../../components/header-login/header-login';
import FormLogin from '../../components/form-login/form-login';
import {changeActiveCity} from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Loading from '../../components/loading/loading';

const isCheckedAuth = (authorizationStatus: string): boolean => authorizationStatus === AuthorizationStatus.Unknown;

const LoginScreen = () => {
  const {authorizationStatus} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus)) {
    return (
      <Loading />
    );
  }

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <Navigate to={AppRoute.Root} />
    );
  }

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
