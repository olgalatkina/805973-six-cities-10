import {NameSpace} from '../../constants';
import {StateType} from '../../types/state';
import {ReviewsType} from '../../types/reviews';

export const getReviews = (state: StateType): ReviewsType => state[NameSpace.Reviews].reviews;
export const getStatusAll = (state: StateType): string => state[NameSpace.Reviews].statusAll;
export const getStatusPost = (state: StateType): string => state[NameSpace.Reviews].statusPost;
