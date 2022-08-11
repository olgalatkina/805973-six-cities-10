import OfferCard from '../offer-card/offer-card';
import {OffersType} from '../../types/offers';

type NearProps = {
  neighbourhood: OffersType,
}

const Near = ({neighbourhood}: NearProps): JSX.Element => (
  <div className="near-places__list places__list">
    {neighbourhood.map((offer) => <OfferCard offer={offer} key={offer.id} />)}
  </div>
);

export default Near;
