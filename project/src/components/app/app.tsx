import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';
import Header from '../header/header';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  numberRentalOffers: number
}

const App = ({numberRentalOffers}: AppProps): JSX.Element => (
  <BrowserRouter>
    <div className="page">
      <Header/>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen numberRentalOffers={numberRentalOffers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
