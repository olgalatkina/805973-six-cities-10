type BtnBookmarkProps = {
  isFavorite: boolean;
}

const BtnBookmark = ({isFavorite}: BtnBookmarkProps): JSX.Element => (
  <button
    className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
    type="button"
  >
    <svg className="place-card__bookmark-icon" width="18" height="19">
      <use xlinkHref="#icon-bookmark"/>
    </svg>
    <span className="visually-hidden">In bookmarks</span>
  </button>
);

export default BtnBookmark;
