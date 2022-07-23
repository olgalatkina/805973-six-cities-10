import {useState} from 'react';
import cn from 'classnames';

type TabItemProps = {
  city: string;
}

const TabItem = ({city}: TabItemProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  // заглушка
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const linkClassName = cn('locations__item-link tabs__item', {
    'tabs__item--active': isActive,
  });

  return (
    <li className="locations__item">
      <a className={linkClassName} href="/#" onClick={handleClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};

export default TabItem;
