import {createReducer} from '@reduxjs/toolkit';
import {setActiveTab, getOffers, getReviews, getUser} from './action';
import {CITIES} from '../constants';
import {offers} from '../mocks/offers';
import {reviews} from '../mocks/reviews';
import {user} from '../mocks/user';


const initialState = {
  activeTab: CITIES[0],
  offers: offers,
  reviews: reviews,
  user: user,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveTab, (state, action) => {
      state.activeTab = action.payload.city;
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
