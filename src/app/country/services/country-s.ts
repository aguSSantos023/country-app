import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries-i';
import { map, Observable } from 'rxjs';
import { Country } from '../interfaces/country-i';
import { CountryMapper } from '../mappers/country-mapper';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryS {

  private http = inject(HttpClient)

  searchByCapital( query: string ): Observable<Country[]>{
    query = query.toLowerCase()

    return this.http.get<RESTCountry[]>(`${ API_URL }/capital/${ query }`).pipe(
      map( res => CountryMapper.mapRestCountryArrayToCountryArray(res))
    )
  }

}
