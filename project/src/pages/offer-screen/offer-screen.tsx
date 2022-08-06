import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import cn from 'classnames';
import Header from '../../components/header/header';
import OfferImageWrapper from '../../components/offer-image-wrapper/offer-image-wrapper';
import OfferInsideItem from '../../components/offer-inside-item/offer-inside-item';
import OfferCard from '../../components/offer-card/offer-card';
import Review from '../../components/review/review';
import FormReview from '../../components/form-review/form-review';
import Map from '../../components/map/map';
import Loading from '../../components/loading/loading';
import {NUMBER_OF_NEIGHBOURHOOD} from '../../constants';

import {useAppSelector, useAppDispatch} from '../../hooks';
import {
  fetchActiveOfferAction,
  fetchReviewsAction,
  fetchNeighbourhoodAction,
} from '../../store/api-actions';

// TODO: style for 'property__bookmark-button--active'

const OfferScreen = (): JSX.Element => {
  const params = useParams();
  const offerID = Number(params.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchActiveOfferAction(offerID));
    dispatch(fetchNeighbourhoodAction(offerID));
    dispatch(fetchReviewsAction(offerID));
  }, [offerID, dispatch]);

  // eslint-disable-next-line
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOfferLoaded = useAppSelector((state) => state.isOfferLoaded);
  const currentOffer = useAppSelector((state) => state.activeOffer);
  const reviews = useAppSelector((state) => state.reviews);
  const neighbourhood = useAppSelector((state) => state.neighbourhood).slice(0, NUMBER_OF_NEIGHBOURHOOD);

  // console.log('currentOffer: ', currentOffer);
  // console.log('reviews: ', reviews);
  // console.log('neighbourhood: ', neighbourhood);

  if (currentOffer === null || isOfferLoaded) {
    return (
      <Loading />
    );
  }

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

  const btnBookmarkClassName = cn('property__bookmark-button button', {
    'property__bookmark-button--active': isFavorite,
  });

  const avatarWrapperClassName = cn('property__avatar-wrapper user__avatar-wrapper', {
    'property__avatar-wrapper--pro': host.isPro,
  });

  return (
    <>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((src) => <OfferImageWrapper src={src} offer={currentOffer} key={src}/>)}
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
                <button
                  className={btnBookmarkClassName}
                  type="button"
                >
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
                  {goods.map((item) => <OfferInsideItem item={item} key={Math.random()}/>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={avatarWrapperClassName}>
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
                <h2 className="reviews__title">Reviews &middot;
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ul className="reviews__list">
                  {reviews.map((review) => <Review review={review} key={review.id}/>)}
                </ul>
                <FormReview/>
              </section>
            </div>
          </div>
          <Map cityInfo={currentOffer.city} points={neighbourhood} />
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
    </>
  );
};

export default OfferScreen;
