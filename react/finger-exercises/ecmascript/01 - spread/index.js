import { isArray } from './utils';

export function min(aPosibbleArray) {
  if(isArray(aPosibbleArray)) {
    return Math.min(...aPosibbleArray);
  }
  return Math.min(aPosibbleArray);
}

export function copy() {

}
