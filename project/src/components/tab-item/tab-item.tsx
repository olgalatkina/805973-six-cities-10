import cn from 'classnames';

type TabItemProps = {
  city: string;
  activeTab: string,
  onTabClick: (city: string) => void,
}

const TabItem = ({city, activeTab, onTabClick}: TabItemProps): JSX.Element => {
  const linkClassName = cn('locations__item-link tabs__item', {
    'tabs__item--active': city === activeTab,
  });

  return (
    <li className="locations__item" onClick={() => onTabClick(city)}>
      <a className={linkClassName} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

export default TabItem;
