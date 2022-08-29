import {CITIES} from '../../constants';
import TabItem from '../../components/tab-item/tab-item';

const TabsList = (): JSX.Element => (
  <ul className="locations__list tabs__list">
    {CITIES.map((city) => <TabItem key={city} city={city} />)}
  </ul>
);

export default TabsList;
