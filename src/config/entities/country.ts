import {Flags} from '../responses/dataCountries';

export interface Country {
  name: string;
  capital?: string[];
  languages?: {[key: string]: string};
  flags: Flags;
}
