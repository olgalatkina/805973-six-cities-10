import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus, Status } from '../../constants';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { UserType } from '../../types/user';

type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  user: UserType | null,
  statusCheckAuth: string,
  statusLogin: string,
  statusLogout: string,
  error: string,
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  statusCheckAuth: Status.Idle,
  statusLogin: Status.Idle,
  statusLogout: Status.Idle,
  error: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
        state.statusCheckAuth = Status.Loading;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.statusCheckAuth = Status.Success;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.statusCheckAuth = Status.Error;
      })
      .addCase(loginAction.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
        state.statusLogin = Status.Loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.statusLogin = Status.Success;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.statusLogin = Status.Error;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.statusLogout = Status.Success;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.statusLogout = Status.Error;
      });
  }
});
