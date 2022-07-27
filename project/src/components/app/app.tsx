import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';
import PrivateRoute from '../private-route/private-route';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import {OffersType} from '../../types/offers';
import {ReviewsType} from '../../types/reviews';
import {UserType} from '../../types/user';
import Page from '../page/page';

type AppProps = {
  offers: OffersType,
  reviews: ReviewsType,
  user: UserType,
}

const App = ({offers, reviews, user}: AppProps): JSX.Element => (
  <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={
          <Page>
            <MainScreen offers={offers} user={user}/>
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
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Page>
              <FavoritesScreen offers={offers} user={user}/>
            </Page>
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Offer}
        element={
          <Page>
            <OfferScreen offers={offers} reviews={reviews} user={user}/>
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

export default App;
