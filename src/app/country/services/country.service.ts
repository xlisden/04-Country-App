import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import type { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    const url = `${API_URL}/capital/${query}`;
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map(rpta => CountryMapper.mapRESTCountryArrayAsCountryArray(rpta)),
        catchError(error => {
          console.log(`Error fetching this ${error}`);

          return throwError(() => new Error(`No se encontró algún país con la capital ${query}`));
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${API_URL}/name/${query}`;
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map(response => CountryMapper.mapRESTCountryArrayAsCountryArray(response)),
        delay(1000),
        catchError(error => {
          console.log(`Error fetching this ${error}`);

          return throwError(() => new Error(`No se encontró algún país de nombre ${query}`));
        })
      );
  }

  searchByAlfaCode(code: string) {
    const url = `${API_URL}/alpha/${code}`;

    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map(response => CountryMapper.mapRESTCountryArrayAsCountryArray(response)),
        map(countries => countries.at(0)),
        delay(1000),
        catchError(error => {
          console.log(`Error fetching this ${error}`);

          return throwError(() => new Error(`No se encontró algún país con el alpha code ${code}`));
        })
      );
  }

}
