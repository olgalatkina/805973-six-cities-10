import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constants';
import {appProcess} from './app-process/app-process';
import {favoritesData} from './favorites-data/favorites-data';
import {offersData} from './offers-data/offers-data';
import {reviewsData} from './reviews-data/reviews-data';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.Favorites]: favoritesData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
