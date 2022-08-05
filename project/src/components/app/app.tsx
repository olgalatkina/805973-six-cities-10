import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../constants';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Page from '../page/page';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

const App = (): JSX.Element => (
  <HistoryRouter history={browserHistory}>
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
          <PrivateRoute>
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
  </HistoryRouter>
);

export default App;
