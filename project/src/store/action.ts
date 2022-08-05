import {createAction} from '@reduxjs/toolkit';
import {OffersType} from '../types/offers';
import {ReviewsType} from '../types/reviews';
import {AppRoute, AuthorizationStatus} from '../constants';
import {UserType} from '../types/user';

export const changeActiveCity = createAction('changeActiveCity', (city) => ({
  payload: city
}));

export const setActiveSortType = createAction('setActiveSortType', (option) => ({
  payload: option
}));

export const loadOffers = createAction<OffersType>('loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');

export const setUser = createAction<UserType | null>('setUser');

export const loadReviews = createAction<ReviewsType>('loadReviews');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
