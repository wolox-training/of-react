import { isArray } from './utils';

export function min(param) {
  if(arguments.length > 0){
    if(arguments.length > 1){
      param = Array.from(arguments);
    }
    if(isArray(param)) {
      return Math.min(...param);
    }
    return Math.min(param);
  }
}

export function copy(param) {
  return Object.assign(param.constructor(),param);
}
