import {CountriesResponse} from '../../config/responses/dataCountries';
import {HttpError} from './HttpError';

interface Config {
  url_base: string;
}

export interface ICountries {
  getCountries(route: string): Promise<CountriesResponse | HttpError>;
}

export abstract class Http implements ICountries {
  protected url_base: string;

  constructor({url_base}: Config) {
    this.url_base = url_base;
  }

  abstract getCountries(route: string): Promise<CountriesResponse | HttpError>;
}
