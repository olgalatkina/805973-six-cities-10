import {useState} from 'react';
import MainEmpty from '../main-no-offers/main-empty';
import Places from '../places/places';
import Map from '../map/map';
import { useAppSelector } from '../../hooks';
import {getActiveCity} from '../../store/app-process/selectors';
import {OffersType} from '../../types/offers';

type CitiesProps = {
  currentOffers: OffersType,
}

const Cities = ({currentOffers}: CitiesProps): JSX.Element => {
  const [activeOfferID, setActiveOfferID] = useState<number | null>(null);
  const activeCity = useAppSelector(getActiveCity);

  const handleOfferMouseOver = (id: number) => setActiveOfferID(id);
  const handleOfferMouseLeave = () => setActiveOfferID(null);

  return (
    <div className="cities">{
      currentOffers.length === 0
        ?
        <MainEmpty city={activeCity} />
        : (
          <div className="cities__places-container container">
            <Places
              activeCity={activeCity}
              currentOffers={currentOffers}
              handleOfferMouseOver={handleOfferMouseOver}
              handleOfferMouseLeave={handleOfferMouseLeave}
            />
            <div className="cities__right-section">
              <Map
                cityInfo={currentOffers[0].city}
                points={currentOffers}
                activeOfferID={activeOfferID}
              />
            </div>
          </div>
        )
    }
    </div>
  );
};

export default Cities;
