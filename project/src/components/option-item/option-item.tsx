import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks/';
import {setActiveOption} from '../../store/action';

type OptionProps = {
  option: string,
  onOptionClick: () => void,
}
const OptionItem = ({option, onOptionClick}: OptionProps): JSX.Element => {
  const activeOption = useAppSelector((state) => state.activeOption);
  const dispatch = useAppDispatch();

  const optionClassName = cn('places__option', {
    'places__option--active': option === activeOption,
  });

  return (
    <li
      className={optionClassName}
      tabIndex={0}
      onClick={() => {
        dispatch(setActiveOption({option: option}));
        onOptionClick();
      }}
    >
      {option}
    </li>
  );
};

export default OptionItem;
