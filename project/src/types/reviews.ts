type ReviewUserType = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}

type ReviewType = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: ReviewUserType,
}

type ReviewsType = ReviewType[];

type ReviewDataType = {
  id: number,
  rating: number,
  comment: string,
}

export type {ReviewsType, ReviewType, ReviewDataType};
