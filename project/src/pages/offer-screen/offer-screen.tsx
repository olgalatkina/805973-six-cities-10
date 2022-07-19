import {useParams} from 'react-router-dom';
import {OffersType} from '../../types/offers';
import {ReviewsType} from '../../types/reviews';
import OfferImageWrapper from '../../components/offer-image-wrapper/offer-image-wrapper';
import OfferInsideItem from '../../components/offer-inside-item/offer-inside-item';
import OfferCard from '../../components/offer-card/offer-card';
import Review from '../../components/review/review';

type OfferScreenProps = {
  offers: OffersType,
  reviews: ReviewsType,
}

// TODO: style for 'property__bookmark-button--active'

const OfferScreen = ({offers, reviews}: OfferScreenProps): JSX.Element => {
  const params = useParams();
  const offerId = Number(params.id);
  const currentOffer = offers.filter((offer) => offer.id === offerId)[0];
  const {
    images,
    title,
    isPremium,
    rating,
    price,
    isFavorite,
    type,
    bedrooms,
    maxAdults,
    goods,
    host,
    description,
  } = currentOffer;
  const neighbourhood = offers
    .filter((offer) => offer.city.name === currentOffer.city.name)
    .filter((offer) => offer.id !== currentOffer.id);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((src) => <OfferImageWrapper src={src} offer={currentOffer} key={Math.random()} />)}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${rating * 20}%`}}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((item) => <OfferInsideItem item={item} key={Math.random()} />)}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper user__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''}`}>
                  <img
                    className="property__avatar user__avatar"
                    src={host.avatarUrl}
                    width="74"
                    height="74"
                    alt={host.name}
                  />
                </div>
                <span className="property__user-name">{host.name}</span>
                <span className="property__user-status">{host.isPro ? 'Pro' : ''}</span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ul className="reviews__list">
                {reviews.map((review) => <Review review={review} key={review.id} />)}
              </ul>
              <form className="reviews__form form" action="#" method="post">
                <label className="reviews__label form__label" htmlFor="review">Your review</label>
                <div className="reviews__rating-form form__rating">
                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    value="5"
                    id="5-stars"
                    type="radio"
                  />
                  <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>

                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    value="4"
                    id="4-stars"
                    type="radio"
                  />
                  <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>

                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    value="3"
                    id="3-stars"
                    type="radio"
                  />
                  <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>

                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    value="2"
                    id="2-stars"
                    type="radio"
                  />
                  <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>

                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    value="1"
                    id="1-star"
                    type="radio"
                  />
                  <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"/>
                    </svg>
                  </label>
                </div>
                <textarea
                  className="reviews__textarea form__textarea"
                  id="review"
                  name="review"
                  placeholder="Tell how was your stay, what you like and what can be improved"
                />
                <div className="reviews__button-wrapper">
                  <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe
                    your stay with at least <b className="reviews__text-amount">50 characters</b>.
                  </p>
                  <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <section className="property__map map"/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {neighbourhood.map((offer) => <OfferCard offer={offer} key={offer.id} />)}
          </div>
        </section>
      </div>
    </main>
  );
};

export default OfferScreen;
