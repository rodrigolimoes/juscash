import { useState, useEffect, Dispatch, SetStateAction } from "react";

export type LocalStorageHook<T> = [
  T,
  (state: T | Dispatch<SetStateAction<T>>) => void
];

/**
 * Local storage hook
 * @param key Key
 * @param initialValue Initial Value
 */
export const useLocalStorage = <T extends any>(
  key: string,
  initialValue: T
): LocalStorageHook<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const valueToStore =
        typeof storedValue === "function"
          ? storedValue(storedValue)
          : storedValue;

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      console.error(e);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
