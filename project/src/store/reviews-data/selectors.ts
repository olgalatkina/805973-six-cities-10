import {NameSpace} from '../../constants';
import {StateType} from '../../types/state';
import {ReviewsType} from '../../types/reviews';

export const getReviews = (state: StateType): ReviewsType => (
  state[NameSpace.Reviews].reviews
);
export const getIsLoading = (state: StateType): boolean => (
  state[NameSpace.Reviews].isLoading
);
