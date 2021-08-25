export const setLocalStorage = (key, value) => {
  localStorage?.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  if (typeof window === 'undefined') return null;
  const value = localStorage?.getItem(key);
  if (value) {
    try {
      const parsedValue = JSON.parse(value);
      return parsedValue;
    } catch (err) {
      localStorage?.removeItem(key);
      return null;
    }
  }
  return null;
};

export const removeLocalStorage = (key) => {
  localStorage?.removeItem(key);
};
