import TabItem from '../../components/tab-item/tab-item';

type TabsListProps = {
  cities: string[],
}

const TabsList = ({cities}: TabsListProps): JSX.Element => (
  <ul className="locations__list tabs__list">
    {cities.map((city) => <TabItem key={city} city={city} />)}
  </ul>
);

export default TabsList;
