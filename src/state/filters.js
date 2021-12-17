import { atom, selector } from 'recoil';

export const filtersState = atom({
  key: 'filters',
  default: {}
});

export const filtersCountries = selector({
  key: 'filtersCountries',
  get: ({ get }) => {
    const filters = get(filtersState);

    return filters['1'] || [];
  }
});
