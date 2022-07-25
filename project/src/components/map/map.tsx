import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import {CityType, LocationType, OffersType, OfferType} from '../../types/offers';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../constants';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  cityInfo: CityType;
  points: OffersType;
  hoveredOffer: OfferType | undefined;
};

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

// style={{height: '500px'}}

const Map = ({cityInfo, points, hoveredOffer}: MapProps): JSX.Element => {
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
            hoveredOffer !== undefined && point.title === hoveredOffer.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, hoveredOffer]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    />
  );
};

export default Map;
