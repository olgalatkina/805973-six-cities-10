import {PointerEvent} from 'react';
import OfferCard from '../offer-card/offer-card';
import {OffersType} from '../../types/offers';

type OffersListProps = {
  offers: OffersType,
  onOfferMouseOver?: (evt: PointerEvent<HTMLDivElement>) => void,
}

const OffersList = ({offers, onOfferMouseOver}: OffersListProps): JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => <OfferCard key={offer.id} offer={offer} onOfferMouseOver={onOfferMouseOver}/>)}
  </div>
);

export default OffersList;
