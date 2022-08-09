import {NameSpace} from '../../constants';
import  {StateType} from '../../types/state';
import {OffersType, OfferType} from '../../types/offers';

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
