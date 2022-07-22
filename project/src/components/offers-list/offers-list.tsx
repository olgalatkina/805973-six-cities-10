import {useState} from 'react';
import OfferCard from '../offer-card/offer-card';
import {OffersType, OfferType} from '../../types/offers';

// TODO: убрать data-temp
// TODO: убрать eslint-disable-next-line

type OffersListProps = {
  offers: OffersType,
}

const OffersList = ({offers}: OffersListProps): JSX.Element => {
  const [activeOfferId, setActiveOfferId] = useState(0);

  // eslint-disable-next-line
  const HandleOfferMouseOver = (offer: OfferType) => {
    setActiveOfferId(Number(offer.id));
  };

  // eslint-disable-next-line
  const HandleOfferMouseLeave = () => {
    setActiveOfferId(0);
  };

  return (
    <div className="cities__places-list places__list tabs__content" data-temp={activeOfferId}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          // onOfferMouseOver={HandleOfferMouseOver}
          // onOfferMouseLeave={HandleOfferMouseLeave}
        />
      ))}
    </div>
  );
};

export default OffersList;
