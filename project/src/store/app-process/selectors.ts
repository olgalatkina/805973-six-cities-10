import {NameSpace} from '../../constants';
import {StateType} from '../../types/state';

export const getActiveCity = (state: StateType): string => state[NameSpace.App].activeCity;
export const getActiveSortType = (state: StateType): string => state[NameSpace.App].activeSortType;
