import OfferCard from '../offer-card/offer-card';
import {OffersType} from '../../types/offers';

type OffersListProps = {
  offers: OffersType,
  onOfferMouseOver?: (id: number) => void,
  onOfferMouseLeave?: () => void,
}

const OffersList = ({offers, onOfferMouseOver, onOfferMouseLeave}: OffersListProps): JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        onOfferMouseOver={onOfferMouseOver}
        onOfferMouseLeave={onOfferMouseLeave}
      />
    ))}
  </div>
);

export default OffersList;
