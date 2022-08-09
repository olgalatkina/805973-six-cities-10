import {NameSpace} from '../../constants';
import {StateType} from '../../types/state';
import {OffersType} from '../../types/offers';

const getFavorites = (state: StateType): OffersType => state[NameSpace.Favorites].favorites;
const getIsLoading = (state: StateType): boolean => state[NameSpace.Favorites].isLoading;
