import {createReducer} from '@reduxjs/toolkit';
import {changeActiveCity, getOffers, getReviews, getUser, setActiveSortType} from './action';
import {CITIES, SortOption} from '../constants';
import {offers} from '../mocks/offers';
import {reviews} from '../mocks/reviews';
import {user} from '../mocks/user';


const initialState = {
  activeCity: CITIES[0],
  activeSortType: SortOption.Popular,
  offers,
  reviews,
  user,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeActiveCity, (state, action) => {
      state.activeCity = action.payload.city;
    })
    .addCase(setActiveSortType, (state, action) => {
      state.activeSortType = action.payload.option;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    })
    .addCase(getUser, (state, action) => {
      state.user = action.payload.user;
    });
});

export {reducer};
