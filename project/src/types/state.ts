import {store} from '../store';
import {OffersType, OfferType} from './offers';
import {ReviewsType} from './reviews';
import {UserType} from "./user";

export type UserProcess = {
  authorizationStatus: string,
  user: UserType | null,
};

export type AppProcess = {
  activeCity: string,
  activeSortType: string,
};

export type OffersData = {
  offers: OffersType,
  isDataLoaded: boolean,
  activeOffer: OfferType | null,
  isOfferLoaded: boolean,
  neighbourhood: OffersType,
};

export type ReviewsData = {
  reviews: ReviewsType,
  isLoading: boolean,
}

export type FavoritesData = {
  favorites: OffersType,
  isLoading: boolean,
}

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
