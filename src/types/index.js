import { shape, string, number } from 'prop-types';

export const rate = shape({
  id: number,
  currency: string,
  code: string,
  mid: number
});
