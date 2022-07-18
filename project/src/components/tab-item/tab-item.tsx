import {useState} from 'react';
// import {NavLink} from 'react-router-dom';

type TabItemProps ={
  city: string;
}

const TabItem = ({city}: TabItemProps) => {
  const [isActive, setIsActive] = useState(false);

  // заглушка
  const handleClick = () => {
    setIsActive(!isActive);
  };

  const linkClassName = (
    `locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`
  );

  return (
    <li className="locations__item">
      <a className={linkClassName} href="#" onClick={handleClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};

export default TabItem;
