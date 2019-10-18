import { shape, string, number } from 'prop-types';

export const rate = shape({
  currency: string,
  code: string,
  mid: number
});

export const favoriteRate = shape({
  ...rate
});
