import {Country} from '../entities/country';
import {Result} from '../responses/dataCountries';

export const countryMapper = (item: Result): Country => {
  return {
    name: item.name,
    capital: item.capital,
    languages: item.languages,
    flags: item.flags,
  };
};
