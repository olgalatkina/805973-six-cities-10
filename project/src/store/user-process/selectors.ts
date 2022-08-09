import {NameSpace, AuthorizationStatus} from '../../constants';
import {StateType} from '../../types/state';
import {UserType} from '../../types/user';

export const getAuthStatus = (state: StateType): AuthorizationStatus => (
  state[NameSpace.User].authorizationStatus
);
export const getUser = (state: StateType): UserType | null => (
  state[NameSpace.User].user
);
