import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../constants';
import { OffersType, OfferType } from '../../types/offers';
import {
  fetchNeighbourhoodAction,
  fetchActiveOfferAction,
  fetchOffersAction,
  changeFavoriteStatusAction,
  logoutAction,
} from '../api-actions';

type OffersData = {
  offers: OffersType,
  activeOffer: OfferType | null,
  neighbourhood: OffersType,
  statusAll: string,
  statusOffer: string,
  error: string
};

const initialState: OffersData = {
  offers: [],
  activeOffer: null,
  neighbourhood: [],
  statusAll: Status.Idle,
  statusOffer: Status.Idle,
  error: '',
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.statusAll = Status.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.statusAll = Status.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.statusAll = Status.Error;
      })
      .addCase(fetchActiveOfferAction.pending, (state) => {
        state.statusOffer = Status.Loading;
      })
      .addCase(fetchActiveOfferAction.fulfilled, (state, action) => {
        state.activeOffer = action.payload;
        state.statusOffer = Status.Success;
      })
      .addCase(fetchActiveOfferAction.rejected, (state) => {
        state.statusOffer = Status.Error;
      })
      .addCase(fetchNeighbourhoodAction.fulfilled, (state, action) => {
        state.neighbourhood = action.payload;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        const index = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
        state.offers[index].isFavorite = !state.offers[index].isFavorite;
        state.neighbourhood.forEach((offer) => {
          if (offer.id === updatedOffer.id) {
            offer.isFavorite = !offer.isFavorite;
          }
        });
        if (state.activeOffer && state.activeOffer.id === updatedOffer.id) {
          state.activeOffer.isFavorite = !state.activeOffer.isFavorite;
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        if (state.activeOffer && state.activeOffer.isFavorite) {
          state.activeOffer.isFavorite = false;
        }
        if (state.offers) {
          state.offers.forEach((offer) => {
            offer.isFavorite = false;
          });
        }
        if (state.neighbourhood) {
          state.neighbourhood.forEach((offer) => {
            offer.isFavorite = false;
          });
        }
      });
  }
});
