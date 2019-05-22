// Hint: use setInterval, create a new Promise and measure time with Date.now()
import TIME from './test';

export function delay(time) {
  return new Promise((resolve, reject) => {
    if (time < TIME * TIME) {
      const date = Date.now();
      setTimeout(() => resolve(Date.now() - date), time);
    } else {
      reject(new Error('This time is too much !'));
    }
  });
}

export const asyncDelay = time => delay(time);

