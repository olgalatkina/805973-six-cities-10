import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { OffersType, OfferType } from '../../types/offers';
import {
  fetchNeighbourhoodAction,
  fetchActiveOfferAction,
  fetchOffersAction
} from '../api-actions';

type OffersData = {
  offers: OffersType,
  isDataLoaded: boolean,
  activeOffer: OfferType | null,
  isOfferLoaded: boolean,
  neighbourhood: OffersType,
};

const initialState: OffersData = {
  offers: [],
  isDataLoaded: false,
  activeOffer: null,
  isOfferLoaded: false,
  neighbourhood: [],
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchActiveOfferAction.pending, (state) => {
        state.isOfferLoaded = true;
      })
      .addCase(fetchActiveOfferAction.fulfilled, (state, action) => {
        state.activeOffer = action.payload;
        state.isOfferLoaded = false;
      })
      .addCase(fetchActiveOfferAction.rejected, (state) => {
        state.isOfferLoaded = false;
      })
      .addCase(fetchNeighbourhoodAction.fulfilled, (state, action) => {
        state.neighbourhood = action.payload;
      });
  }
});
