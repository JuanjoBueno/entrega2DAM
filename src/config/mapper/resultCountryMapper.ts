import ResultCountries from '../entities/resultCountries';
import {CountriesResponse, Result} from '../responses/dataCountries';
import {countryMapper} from './countryMapper';

export const resultCountryMapper = (
  result: CountriesResponse,
): ResultCountries => {
  return {
    countries: result.country.map((item: Result) => countryMapper(item)),
  };
};
