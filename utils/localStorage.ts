export const getLocalStorageItem = (key: string) => {
  if (typeof window === "undefined") return null;

  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item)) : null;
};

export const setLocalStorageItem = (key: string, value: any): void => {
  if (typeof window === "undefined") return;

  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorageItem = (key: string): void => {
  if (typeof window === "undefined") return;

  localStorage.removeItem(key);
}