import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {
  static mapRESTCountryAsCountry(country: RESTCountry): Country {
    return {
      cca2: country.cca2,
      flag: country.flag,
      flagSvg: country.flags.svg,
      name: country.translations['spa'].common ?? 'No Spanish Name',
      capital: country.capital.join(','),
      population: country.population,
    }
  }

  static mapRESTCountryArrayAsCountryArray(countries: RESTCountry[]): Country[] {
    return countries.map(CountryMapper.mapRESTCountryAsCountry);
  }
}
