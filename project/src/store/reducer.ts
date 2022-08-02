import {createReducer} from '@reduxjs/toolkit';
import {
  changeActiveCity,
  setActiveSortType,
  loadOffers,
  loadActiveOffer,
  loadReviews,
  loadNeighbourhood,
  setDataLoadedStatus,
  requireAuthorization,
  setError,
  setUser,
  loadFavorites,
} from './action';
import {CITIES, SortOption, AuthorizationStatus} from '../constants';
import {OffersType, OfferType} from '../types/offers';
import {ReviewsType} from '../types/reviews';
import {UserType} from '../types/user';

type initialStateType = {
  activeCity: string,
  activeSortType: string,
  offers: OffersType,
  activeOffer: OfferType | null,
  reviews: ReviewsType,
  neighbourhood: OffersType,
  isDataLoaded: boolean,
  authorizationStatus: string,
  error: string | null,
  user: UserType | null,
  favorites: OffersType,
}

const initialState: initialStateType = {
  activeCity: CITIES[0],
  activeSortType: SortOption.Popular,
  offers: [],
  activeOffer: null,
  reviews: [],
  neighbourhood: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  user: null,
  favorites: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload.city;
    })
    .addCase(setActiveSortType, (state, action) => {
      state.activeSortType = action.payload.option;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNeighbourhood, (state, action) => {
      state.neighbourhood = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(loadActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    });
});

export {reducer};
