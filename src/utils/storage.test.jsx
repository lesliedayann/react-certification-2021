import { storage } from './storage';

const fakeLocalStorage = (function () {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

describe('storage', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  it('saves the key to the storage', () => {
    storage.set('the-key', 'fake-value');

    expect(window.localStorage.getItem('the-key')).toEqual(JSON.stringify('fake-value'));
  });
});
