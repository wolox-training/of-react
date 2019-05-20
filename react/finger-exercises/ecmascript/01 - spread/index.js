import { isArray } from './utils';

export function min(...args) {
  if (args.length > 0) {
    if (args.length > 1) {
      return Math.min(...args);
    }
    if (isArray(args[0])) {
      return Math.min(...args[0]);
    }
    return Math.min(args[0]);
  }
  return undefined;
}

export function copy(param) {
  return Object.assign(param.constructor(), param);
}

export function reverseMerge(arr1, arr2) {
  const arrResult = [];
  for (var i = 0; i < arr2.length; i++) {
    arrResult.push(arr2[i]);
  }
  for (var j = 0; j < arr1.length; j++) {
    arrResult.push(arr1[j]);
  }
  return arrResult;
}
