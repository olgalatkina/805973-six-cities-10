import {createAction} from '@reduxjs/toolkit';

export const changeActiveCity = createAction('changeActiveCity', (city) => ({
  payload: city
}));

export const setActiveSortType = createAction('setActiveSortType', (option) => ({
  payload: option
}));

export const getOffers = createAction('getOffers', (offers) => ({
  payload: offers
}));

export const getReviews = createAction('getReviews', (reviews) => ({
  payload: reviews
}));

export const getUser = createAction('getUser', (user) => ({
  payload: user
}));
