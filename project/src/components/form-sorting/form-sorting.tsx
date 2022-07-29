import {useState} from 'react';
import cn from 'classnames';
import {SortOption} from '../../constants';
import OptionItem from '../option-item/option-item';
import {useAppSelector} from '../../hooks/';

const FormSorting = (): JSX.Element => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const activeOption = useAppSelector((state) => state.activeOption);

  const selectClassName = cn('places__options places__options--custom', {
    'places__options--opened': isSelectOpen,
  });

  const handleOptionClick = () => setIsSelectOpen(!isSelectOpen);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleOptionClick}
      >
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={selectClassName}>
        {Object.values(SortOption).map((option) => (
          <OptionItem
            key={option}
            option={option}
            onOptionClick={handleOptionClick}
          />
        ))}
      </ul>
    </form>
  );
};

export default FormSorting;
