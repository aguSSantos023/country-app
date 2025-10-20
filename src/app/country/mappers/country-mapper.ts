import { Country } from "../interfaces/country-i";
import { RESTCountry } from "../interfaces/rest-countries-i";


export class CountryMapper {

  static mapRestCountryToCountry( restCountry: RESTCountry ): Country {

    return {
      capital: restCountry.capital.join(','),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No name',
      population: restCountry.population
    }
  }

  static mapRestCountryArrayToCountryArray( restCountries: RESTCountry[] ): Country[] {

    return restCountries.map( this.mapRestCountryToCountry )
  }



}
