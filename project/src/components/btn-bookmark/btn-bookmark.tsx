import cn from 'classnames';

type BtnBookmarkProps = {
  isFavorite: boolean;
}

const BtnBookmark = ({isFavorite}: BtnBookmarkProps): JSX.Element => {
  const btnClassName = cn('button place-card__bookmark-button', {
    'place-card__bookmark-button--active': isFavorite,
  });

  return (
    <button
      className={btnClassName}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
};

export default BtnBookmark;
