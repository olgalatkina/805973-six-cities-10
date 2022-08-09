import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { fetchReviewsAction, postReviewAction } from '../api-actions';
import {ReviewsType} from '../../types/reviews';

type ReviewsData = {
  reviews: ReviewsType,
  isLoading: boolean,
}

const initialState: ReviewsData = {
  reviews: [],
  isLoading: false,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});
