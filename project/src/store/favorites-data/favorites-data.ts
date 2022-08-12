import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../constants';
import { fetchFavoritesAction, changeFavoriteStatusAction, logoutAction, checkAuthAction } from '../api-actions';
import { OffersType } from '../../types/offers';

type FavoritesData = {
  favorites: OffersType,
  statusAll: string,
  statusChange: string,
  error: string,
}

const initialState: FavoritesData = {
  favorites: [],
  statusAll: Status.Idle,
  statusChange: Status.Idle,
  error: '',
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.statusAll = Status.Loading;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.statusAll = Status.Success;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.statusAll = Status.Error;
      })
      .addCase(changeFavoriteStatusAction.pending, (state) => {
        state.statusChange = Status.Loading;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        if (updatedOffer.isFavorite) {
          state.favorites.push(updatedOffer);
        } else {
          state.favorites = state.favorites.filter((offer) => offer.id !== updatedOffer.id);
        }
        state.statusChange = Status.Success;
      })
      .addCase(changeFavoriteStatusAction.rejected, (state) => {
        state.statusChange = Status.Error;
      })
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.statusAll = Status.Success;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.favorites = [];
      });
  }
});
