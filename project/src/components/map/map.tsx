import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import {CityType, OffersType, OfferType} from '../../types/offers';
import cn from 'classnames';
import {Screen} from '../../constants';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../constants';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  cityInfo: CityType,
  points: OffersType,
  activeOffer: OfferType | undefined,
  screenClass: string,
};

const Map = ({cityInfo, points, activeOffer, screenClass}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityInfo);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            activeOffer !== undefined && point.title === activeOffer.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, activeOffer]);

  const mapClassName = cn('map',{
    'cities__map': screenClass === Screen.common,
    'property__map': screenClass === Screen.offer,
  });

  return (
    <section
      className={mapClassName}
      ref={mapRef}
    />
  );
};

export default Map;
