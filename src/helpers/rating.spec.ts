import { averageRating } from '~/helpers/rating';

describe(`averageRating`, () => {
  it(`should returns 0 for an empty array of reviews`, () => {
    const result = averageRating([]);
    expect(result).toEqual(0);
  });

  it(`should return the correct average rating for an array of reviews`, () => {
    const reviews = [
      {
        id: `1`,
        rating: 4,
        text: `really good`,
      },
      {
        id: `2`,
        rating: 2,
        text: `was ok`,
      },
    ];
    const result = averageRating(reviews);
    expect(result).toEqual(3);
  });
});
