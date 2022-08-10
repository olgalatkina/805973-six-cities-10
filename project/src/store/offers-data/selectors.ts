import {createSelector} from '@reduxjs/toolkit';
import {NameSpace, SortOption} from '../../constants';
import {StateType} from '../../types/state';
import {OffersType, OfferType} from '../../types/offers';
import {getActiveCity, getActiveSortType} from '../app-process/selectors';
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
  (offers: OffersType, activeCity: string | City): OffersType => (
    offers.filter((offer) => offer.city.name === activeCity)
  )
);

const sortByOption = (offers: OffersType, activeSortType: string) => {
  switch (activeSortType) {
    case SortOption.Popular:
      return offers;
    case SortOption.LowToHigh:
      return offers.sort((offerA, offerB) => offerA.price - offerB.price);
    case SortOption.HighToLow:
      return offers.sort((offerA, offerB) => offerB.price - offerA.price);
    case SortOption.TopRatedFirst:
      return offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return offers;
  }
};

export const getSortedOffers = createSelector(
  [getFilteredOffers, getActiveSortType],
  (offers: OffersType, activeSortType: string): OffersType => sortByOption(offers, activeSortType)
);
