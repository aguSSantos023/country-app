import { Component, inject, signal } from '@angular/core';
import { CountrySearchInputC } from "../../components/country-search-input-c/country-search-input-c";
import { CountryListC } from "../../components/country-list-c/country-list-c";
import { CountryS } from '../../services/country-s';
import { Country } from '../../interfaces/country-i';

@Component({
  selector: 'app-by-country-p',
  imports: [CountrySearchInputC, CountryListC],
  templateUrl: './by-country-p.html',
  styleUrl: './by-country-p.css'
})
export class ByCountryP {

  countryService = inject(CountryS)

  isLoading = signal<boolean>(false)
  isError = signal<string | null>(null)
  countries = signal<Country[]>([])


  onSearch(query: string){

    if( this.isLoading() ) return

    this.isLoading.set(true)
    this.isError.set(null)

    this.countryService.searchByCountry(query)
    .subscribe({
      next: countries => {
        console.log(countries);

        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: err => {
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set(`${err}: ${query}`)
      }
    });

  }
}
