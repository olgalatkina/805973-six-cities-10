import {createAction} from '@reduxjs/toolkit';
import {OffersType} from '../types/offers';
import {ReviewsType} from '../types/reviews';
import {AuthorizationStatus} from '../constants';

export const changeActiveCity = createAction('changeActiveCity', (city) => ({
  payload: city
}));

export const setActiveSortType = createAction('setActiveSortType', (option) => ({
  payload: option
}));

export const loadOffers = createAction<OffersType>('loadOffers');

export const loadReviews = createAction<ReviewsType>('loadReviews');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

// ----------

export const getOffers = createAction('getOffers', (offers) => ({
  payload: offers
}));

export const getReviews = createAction('getReviews', (reviews) => ({
  payload: reviews
}));

export const getUser = createAction('getUser', (user) => ({
  payload: user
}));
