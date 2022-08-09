export enum AppRoute {
  Root = '/',
  Offer = '/offer/:id',
  Login = '/login',
  Favorites = '/favorites',
  NotFound = '*',
}

export enum APIRoute {
  Offers = '/hotels',
  Favorites = '/favorite',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortOption {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum OffersStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export enum Type {
  apartment = 'Apartment',
  room = 'Private room',
  house = 'House',
  hotel = 'Hotel',
}

export enum NameSpace {
  App = 'APP',
  User = 'USER',
  Offers = 'OFFERS',
  Reviews = 'REVIEWS',
  Favorites = 'FAVORITES',
}

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const STARS_VALUES = ['5', '4', '3', '2', '1'];
export const NUMBER_OF_NEIGHBOURHOOD = 3;
export const NUMBER_OF_IMAGES = 6;
export const NUMBER_OF_REVIEWS = 10;
