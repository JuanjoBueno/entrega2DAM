import {CountriesResponse} from '../../config/responses/dataCountries';
import {Http} from './http';
import {HttpError} from './HttpError';

export class HttpFetch extends Http {
  async getCountries(route: string): Promise<CountriesResponse | HttpError> {
    try {
      const data = await fetch(`${this.url_base}${route}`);
      const jsonData: CountriesResponse = await data.json();
      return jsonData;
    } catch (error) {
      return new HttpError(`${error}`);
    }
  }
}
