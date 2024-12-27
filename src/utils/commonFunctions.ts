// export const debounce = (fn: Function, delay: number) => {
//   let timeout: NodeJS.Timeout;
//   return (...args: any[]) => {
//     if (timeout) clearTimeout(timeout);
//     timeout = setTimeout(() => fn(...args), delay);
//   };
// };

export const debounce = (fn: Function, delay: number) => {
  let timeout: NodeJS.Timeout | null = null;

  const debounced = (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};
