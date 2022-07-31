import cn from 'classnames';

type OptionProps = {
  option: string,
  onOptionClick: () => void,
  isActive: boolean,
}
const OptionItem = ({option, onOptionClick, isActive}: OptionProps): JSX.Element => {
  const optionClassName = cn('places__option', {
    'places__option--active': isActive,
  });

  return (
    <li
      className={optionClassName}
      tabIndex={0}
      onClick={() => onOptionClick()}
    >
      {option}
    </li>
  );
};

export default OptionItem;
