import {MMKV} from 'react-native-mmkv';

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

const storage = new MMKV();

export const saveCityDataToStorage = (data: any) => {
  storage.set('cityData', JSON.stringify(data));
};

export const getCityDataFromStorage = () => {
  const cityData = storage.getString('cityData');
  return cityData ? JSON.parse(cityData) : [];
};
