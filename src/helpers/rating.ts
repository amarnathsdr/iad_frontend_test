import { type Review } from '~/composables/restaurants';

export function averageRating(reviews: Review[]): number {
  if (reviews?.length === 0) return 0;
  const sumOfRating = reviews?.reduce((total: number, review: Review) => total + review.rating, 0);
  return sumOfRating / reviews?.length;
}
