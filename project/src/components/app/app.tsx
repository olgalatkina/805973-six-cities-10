import Header from '../header/header';
import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  numberRentalOffers: number
}

const App = ({numberRentalOffers}: AppProps): JSX.Element => (
  <div className="page page--gray page--main">
    <Header/>
    <MainScreen numberRentalOffers={numberRentalOffers}/>
  </div>
);

export default App;
