import { createSelector } from '@reduxjs/toolkit';
import {NameSpace, NUMBER_OF_REVIEWS} from '../../constants';
import {StateType} from '../../types/state';
import {ReviewsType} from '../../types/reviews';

export const getReviews = (state: StateType): ReviewsType => state[NameSpace.Reviews].reviews;
export const getStatusPost = (state: StateType): string => state[NameSpace.Reviews].statusPost;
export const getSortedReviews = createSelector(
  [getReviews],
  (reviews: ReviewsType) => {
    if (reviews.length <= 1) {
      return reviews;
    }
    return [...reviews]
      .sort((reviewA, reviewB) => Date.parse(reviewB.date) - Date.parse(reviewA.date))
      .slice(0, NUMBER_OF_REVIEWS);
  }
);
