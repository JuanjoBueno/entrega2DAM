import {CapitalInfo, CoatOfArms, Maps} from '../responses/dataCountries';

export interface InfoCountry {
  maps: Maps;
  capitalInfo: CapitalInfo;
  timezones: string[];
  population: number;
  coatOfArms: CoatOfArms;
}
