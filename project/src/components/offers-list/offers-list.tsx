import {useState, PointerEvent} from 'react';
import OfferCard from '../offer-card/offer-card';
import {OffersType} from '../../types/offers';

type OffersListProps = {
  offers: OffersType,
}

// TODO: убрать data-temp

const OffersList = ({offers}: OffersListProps): JSX.Element => {
  const [activeOfferId, setActiveOfferId] = useState(0);

  const offerMouseOverHandler = (evt: PointerEvent<HTMLDivElement>) => {
    setActiveOfferId(Number(evt.currentTarget.id));
  };

  return (
    <div className="cities__places-list places__list tabs__content" data-temp={activeOfferId} >
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} onOfferMouseOver={offerMouseOverHandler} />)}
    </div>
  );
};

export default OffersList;
