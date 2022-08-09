import {useState, useRef} from 'react';
import cn from 'classnames';
import {SortOption} from '../../constants';
import OptionItem from '../option-item/option-item';
import {useAppSelector, useAppDispatch} from '../../hooks/';
import {setActiveSortType} from '../../store/action';
import useOnEscPress from '../../hooks/useOnEscPress';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const FormSorting = (): JSX.Element => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const activeSortType = useAppSelector((state) => state.activeSortType);
  const dispatch = useAppDispatch();

  const handleOptionClick = () => setIsSelectOpen(!isSelectOpen);

  const formRef = useRef(null);
  const clickOutsideHandler = () => isSelectOpen && handleOptionClick();
  useOnClickOutside(formRef, clickOutsideHandler);

  useOnEscPress(isSelectOpen, handleOptionClick);

  const selectClassName = cn('places__options places__options--custom', {
    'places__options--opened': isSelectOpen,
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleOptionClick}
      >
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={selectClassName} ref={formRef}>
        {Object.values(SortOption).map((option) => (
          <OptionItem
            key={option}
            option={option}
            onOptionClick={() => {
              dispatch(setActiveSortType(option));
              handleOptionClick();
            }}
            isActive={option === activeSortType}
          />
        ))}
      </ul>
    </form>
  );
};

export default FormSorting;
