import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../constants';
import { fetchReviewsAction, postReviewAction } from '../api-actions';
import {ReviewsType} from '../../types/reviews';

type ReviewsData = {
  reviews: ReviewsType,
  statusAll: string,
  statusPost: string,
}

const initialState: ReviewsData = {
  reviews: [],
  statusAll: Status.Idle,
  statusPost: Status.Idle,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.statusAll = Status.Success;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.statusPost = Status.Loading;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.statusPost = Status.Success;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.statusPost = Status.Error;
      });
  }
});
