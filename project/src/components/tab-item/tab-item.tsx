import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks/';
import {setActiveTab} from '../../store/action';

type TabItemProps = {
  city: string;
}

const TabItem = ({city}: TabItemProps): JSX.Element => {
  const activeTab = useAppSelector((state) => state.activeTab);
  const dispatch = useAppDispatch();

  const linkClassName = cn('locations__item-link tabs__item', {
    'tabs__item--active': city === activeTab,
  });

  return (
    <li className="locations__item" onClick={() => dispatch(setActiveTab({city: city}))}>
      <div className={linkClassName} style={{'cursor': 'pointer'}}>
        <span>{city}</span>
      </div>
    </li>
  );
};

export default TabItem;
