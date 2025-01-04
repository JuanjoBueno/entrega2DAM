import {Flags, Name} from '../responses/dataCountries';

export interface Country {
  name: Name;
  capital?: string[];
  languages?: {[key: string]: string};
  flags: Flags;
}
