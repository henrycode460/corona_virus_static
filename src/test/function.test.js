import { getCountries } from '../Redux/CoronaVirus';

it('getCountries should return a promise', () => {
  expect(getCountries()).toEqual(expect.any(Function));
});
