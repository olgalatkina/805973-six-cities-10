import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from '../header/header';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppProps = {
  numberRentalOffers: number
}

const App = ({numberRentalOffers}: AppProps): JSX.Element => (
  <BrowserRouter>
    <div className="page">
      <Header/>
      <Routes>
        <Route
          path='/'
          element={<MainScreen numberRentalOffers={numberRentalOffers}/>}
        />
        <Route
          path='/login'
          element={<LoginScreen />}
        />
        <Route
          path='/favorites'
          element={<FavoritesScreen />}
        />
        <Route
          path='/offer/:id'
          element={<OfferScreen />}
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
