import {createAction} from '@reduxjs/toolkit';

export const setActiveTab = createAction('setActiveTab', (city) => ({
  payload: city
}));

export const setActiveOption = createAction('setActiveOption', (option) => ({
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
