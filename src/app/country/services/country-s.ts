import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries-i';
import { map, Observable, catchError, throwError } from 'rxjs';
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
      map( res => CountryMapper.mapRestCountryArrayToCountryArray(res)),
      catchError( error => {
        console.log('Error fetching: ', error);

        return throwError(() => new Error('No se pudo obtener países con ese query'))
      })
    )
  }

  searchByCountry( query: string ): Observable<Country[]>{
    query = query.toLowerCase()
    console.log(query, "servicio");


    return this.http.get<RESTCountry[]>(`${ API_URL }/name/${ query }`).pipe(
      map( res => CountryMapper.mapRestCountryArrayToCountryArray(res)),
      catchError( error => {
        console.log('Error fetching: ', error);

        return throwError(() => new Error('No se pudo obtener países con ese query'))
      })
    )
  }

}
