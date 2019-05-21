import { isArray } from './utils';

export function min(...args) {
  if (args.length) {
    if (args.length > 1) return Math.min(...args);
    if (isArray(args[0])) return Math.min(...args[0]);
    return Math.min(args[0]);
  }
  return undefined;
}

export const copy = param => Object.assign(param.constructor(), param);

export const reverseMerge = (arr1, arr2) => [...arr2, ...arr1];

export function filterAttribs(arg) {
  const copyArg = copy(arg);
  delete copyArg.a;
  delete copyArg.b;
  return copyArg;
}
