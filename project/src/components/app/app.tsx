import Header from "../header/header";
import MainScreen from "../../pages/main-screen/main-screen";

const App = (): JSX.Element => {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <MainScreen/>
    </div>
  );
}

export default App;
