import {OfferType} from '../../types/offers';

type OfferImageWrapperProps = {
  src: string,
  offer: OfferType,
}

const OfferImageWrapper = ({src, offer}: OfferImageWrapperProps): JSX.Element => (
  <div className="property__image-wrapper">
    <img className="property__image" src={src} alt={offer.title}/>
  </div>
);

export default OfferImageWrapper;
