import { isArray } from './utils';

export function min(...args) {
  if (args.length) {
    if (args.length > 1) return Math.min(...args);
    if (isArray(args[0])) return Math.min(...args[0]);
    return Math.min(args[0]);
  }
  return undefined;
}

export function copy(param) {
  if (isArray(param)) {
    return [...param];
  }
  return { ...param };
}

export const reverseMerge = (arr1, arr2) => [...arr2, ...arr1];

export function filterAttribs(arg) {
  const { a, b, ...copyArg } = arg;
  return copyArg;
}
