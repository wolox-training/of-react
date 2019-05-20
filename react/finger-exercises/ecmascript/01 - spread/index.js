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
  arrResult.push(...arr2);
  arrResult.push(...arr1);
  return arrResult;
}

export function filterAttribs(arg) {
  const copyArg = copy(arg);
  delete copyArg.a;
  delete copyArg.b;
  return copyArg;
}
