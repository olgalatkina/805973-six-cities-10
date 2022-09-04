import { NameSpace } from '../../constants';
import { StateType } from '../../types/state';
import { OffersType } from '../../types/offers';

export const getFavorites = (state: StateType): OffersType => state[NameSpace.Favorites].favorites;
export const getStatusAll = (state: StateType): string => state[NameSpace.Favorites].statusAll;
