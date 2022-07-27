import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

import {OffersType} from '../../types/offers';
import {ReviewsType} from '../../types/reviews';
import {UserType} from '../../types/user';

type AppProps = {
  offers: OffersType,
  reviews: ReviewsType,
  user: UserType,
}

// TODO: изменять класс обёртки в зависимости от Route (empty main)?!

const App = ({offers, reviews, user}: AppProps): JSX.Element => (
  <div className="page page--gray page--main">
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen offers={offers} user={user}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen offers={offers} user={user}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen offers={offers} reviews={reviews} user={user}/>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
