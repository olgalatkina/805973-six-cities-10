import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';
import {useAppSelector} from '../../hooks';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Page from '../page/page';

const isCheckedAuth = (authorizationStatus: string): boolean => authorizationStatus === AuthorizationStatus.Unknown;

const App = (): JSX.Element => {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Page>
              <MainScreen/>
            </Page>
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <Page>
              <LoginScreen/>
            </Page>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Page>
                <FavoritesScreen/>
              </Page>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={
            <Page>
              <OfferScreen/>
            </Page>
          }
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
