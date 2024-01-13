export const loadStateFn = (params) => localStorage.getItem(params);

export const saveStateFn = (key, value) => localStorage.setItem(key, value);

export const removeStateFn = (key) => localStorage.removeItem(key);
