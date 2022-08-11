import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { StateType } from '../../types/state';
import { OffersType, OfferType } from '../../types/offers';
import { getActiveCity, getActiveSortType } from '../app-process/selectors';
import { City } from '../../constants';
import { sortByOption } from '../../utils';

export const getOffers = (state: StateType): OffersType => (
  state[NameSpace.Offers].offers
);
export const getStatusAll = (state: StateType): string => (
  state[NameSpace.Offers].statusAll
);
export const getActiveOffer = (state: StateType): OfferType | null => (
  state[NameSpace.Offers].activeOffer
);
export const getStatusOffer = (state: StateType): string => (
  state[NameSpace.Offers].statusOffer
);
export const getNeighbourhood = (state: StateType): OffersType => (
  state[NameSpace.Offers].neighbourhood
);

export const getFilteredOffers = createSelector(
  [getOffers, getActiveCity],
  (offers: OffersType, activeCity: string | City): OffersType => (
    offers.filter((offer) => offer.city.name === activeCity)
  )
);

export const getSortedOffers = createSelector(
  [getFilteredOffers, getActiveSortType],
  (offers: OffersType, activeSortType: string): OffersType => sortByOption(offers, activeSortType)
);
