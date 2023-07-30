export const SCROLL_POS_KEY = "scroll-pos";

type Key = typeof SCROLL_POS_KEY;

export const setSessionStorage = <T>(key: Key, value: T) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = <T>(key: Key, defaultValue: T): T => {
  const value = sessionStorage.getItem(key);
  if (value === null) {
    return defaultValue;
  }
  return JSON.parse(value);
};
