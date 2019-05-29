import { shape, string, number } from 'prop-types';

export const bookSelectedPropType = shape({
  id: number,
  name: string,
  quantity: number
});
