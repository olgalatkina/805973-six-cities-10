import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatchType, StateType} from '../types/state.js';
import {OffersType, OfferType, FavoriteDataType} from '../types/offers';
import {AuthDataType, UserType} from '../types/user';
import {ReviewsType, ReviewDataType} from '../types/reviews';
import {redirectToRoute} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute} from '../constants';

export const fetchOffersAction = createAsyncThunk<OffersType, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OffersType>(APIRoute.Offers);
    return data;
  },
);

export const fetchActiveOfferAction = createAsyncThunk<OfferType, number, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchActiveOffer',
  async (offerID, {extra: api}) => {
    const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${offerID}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<ReviewsType, number, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (offerID, {extra: api}) => {
    const {data} = await api.get<ReviewsType>(`${APIRoute.Reviews}/${offerID}`);
    return data;
  }
);

export const postReviewAction = createAsyncThunk<ReviewsType, ReviewDataType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/postReview',
  async ({id, rating, comment}, {extra: api}) => {
    const {data} = await api.post<ReviewsType>(`${APIRoute.Reviews}/${id}`, {comment, rating});
    return data;
  },
);

export const fetchNeighbourhoodAction = createAsyncThunk<OffersType, number, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchNeighbourhood',
  async (offerID, {extra: api}) => {
    const {data} = await api.get<OffersType>(`${APIRoute.Offers}/${offerID}${APIRoute.Nearby}`);
    return data;
  }
);

export const fetchFavoritesAction = createAsyncThunk<OffersType, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OffersType>(APIRoute.Favorites);
    return data;
  },
);

export const changeFavoriteStatusAction = createAsyncThunk<OfferType, FavoriteDataType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/postFavorite',
  async ({id, status}, {extra: api}) => {
    const {data} = await api.post<OfferType>(`${APIRoute.Favorites}/${id}/${status}`);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserType, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(fetchFavoritesAction());
      return data;
    } catch (err) {
      throw err;
    }
  },
);

export const loginAction = createAsyncThunk<UserType, AuthDataType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserType>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
