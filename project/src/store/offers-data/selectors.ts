import {NameSpace} from '../../constants';
import {StateType} from '../../types/state';
import {OffersType, OfferType} from '../../types/offers';
import createSelector from '@reduxjs/toolkit';
import {getActiveCity} from '../app-process/selectors';
import {City} from '../../constants';

export const getOffers = (state: StateType): OffersType => (
  state[NameSpace.Offers].offers
);
export const getIsDataLoading = (state: StateType): boolean => (
  state[NameSpace.Offers].isDataLoaded
);
export const getActiveOffer = (state: StateType): OfferType | null => (
  state[NameSpace.Offers].activeOffer
);
export const getIsOfferLoaded = (state: StateType): boolean => (
  state[NameSpace.Offers].isOfferLoaded
);
export const getNeighbourhood = (state: StateType): OffersType => (
  state[NameSpace.Offers].neighbourhood
);

export const getFilteredOffers = createSelector(
  [getOffers, getActiveCity],
  (offers: OffersType, activeCity: string | City): OffersType => {
    switch (activeCity) {
      case City.Paris:
        return offers.filter((offer) => offer.city.name === City.Paris);
      case City.Cologne:
        return offers.filter((offer) => offer.city.name === City.Cologne);
      case City.Brussels:
        return offers.filter((offer) => offer.city.name === City.Brussels);
      case City.Amsterdam:
        return offers.filter((offer) => offer.city.name === City.Amsterdam);
      case City.Hamburg:
        return offers.filter((offer) => offer.city.name === City.Hamburg);
      case City.Dusseldorf:
        return offers.filter((offer) => offer.city.name === City.Dusseldorf);
      default:
        return offers.filter((offer) => offer.city.name === City.Paris);
    }
  }
);
