import FormSorting from '../form-sorting/form-sorting';
import OffersList from '../offers-list/offers-list';
import {OffersType} from '../../types/offers';

type PlacesProps = {
  activeCity: string,
  currentOffers: OffersType,
  handleOfferMouseOver: (id: number) => void,
  handleOfferMouseLeave: () => void,
}

const Places = ({activeCity, currentOffers, handleOfferMouseOver, handleOfferMouseLeave}: PlacesProps): JSX.Element => {
  const getTitle = (numberOfOffers: number) => (
    `${numberOfOffers} ${numberOfOffers === 1 ? 'place' : 'places'} to stay in ${activeCity}`
  );

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{getTitle(currentOffers.length)}</b>
      <FormSorting/>
      <OffersList
        offers={currentOffers}
        onOfferMouseOver={handleOfferMouseOver}
        onOfferMouseLeave={handleOfferMouseLeave}
      />
    </section>
  );
};

export default Places;
