import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks/';
import {changeActiveCity} from '../../store/app-process/app-process';
import {getActiveCity} from '../../store/app-process/selectors';

type TabItemProps = {
  city: string;
}

const TabItem = ({city}: TabItemProps): JSX.Element => {
  const activeCity = useAppSelector((getActiveCity);
  const dispatch = useAppDispatch();

  const linkClassName = cn('locations__item-link tabs__item', {
    'tabs__item--active': city === activeCity,
  });

  return (
    <li className="locations__item" onClick={() => dispatch(changeActiveCity(city))}>
      <a className={linkClassName} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

export default TabItem;
