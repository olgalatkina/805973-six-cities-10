import {useState} from 'react';
import OfferCard from '../offer-card/offer-card';
import {OffersType} from '../../types/offers';

type OffersListProps = {
  offers: OffersType,
  onOfferHover?: (id: number) => void,
}

const OffersList = ({offers, onOfferHover}: OffersListProps): JSX.Element => {
  // const [, setActiveOfferId] = useState(0);
  //
  // const handleOfferMouseOver = (id: number) => setActiveOfferId(id);
  // const handleOfferMouseLeave = () => setActiveOfferId(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          // onOfferMouseOver={handleOfferMouseOver}
          // onOfferMouseLeave={handleOfferMouseLeave}
          onOfferHover={onOfferHover}
        />
      ))}
    </div>
  );
};

export default OffersList;
