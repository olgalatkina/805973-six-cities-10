import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import {CityType, OffersType} from '../../types/offers';
import cn from 'classnames';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import {useLocation} from 'react-router-dom';
import {AppRoute} from '../../constants';

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

type MapProps = {
  cityInfo: CityType,
  points: OffersType,
  activeOfferID?: number | null,
};

const getRoute = (pathname: string) => pathname.split('/')[1];

const Map = ({cityInfo, points, activeOfferID}: MapProps): JSX.Element => {
  const {pathname} = useLocation();
  const route = getRoute(pathname);
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
            activeOfferID && point.id === activeOfferID
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, activeOfferID]);

  const mapClassName = cn('map', {
    'cities__map': pathname === AppRoute.Root,
    'property__map': route === getRoute(AppRoute.Offer),
  });

  return (
    <section
      style={{
        maxWidth: '1144px',
        margin: '0 auto',
      }}
      className={mapClassName}
      ref={mapRef}
    />
  );
};

export default Map;
