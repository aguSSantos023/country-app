import { Component, inject, signal } from '@angular/core';
import { CountrySearchInputC } from "../../components/country-search-input-c/country-search-input-c";
import { CountryListC } from "../../components/country-list-c/country-list-c";
import { CountryS } from '../../services/country-s';
import { Country } from '../../interfaces/country-i';

@Component({
  selector: 'app-by-capital-p',
  imports: [CountrySearchInputC, CountryListC],
  templateUrl: './by-capital-p.html',
  styleUrl: './by-capital-p.css'
})
export class ByCapitalP {

  countryService = inject(CountryS)

  isLoading = signal<boolean>(false)
  isError = signal<string | null>(null)
  countries = signal<Country[]>([])


  onSearch(query: string){

    if( this.isLoading() ) return

    this.isLoading.set(true)

    this.countryService.searchByCapital(query)
    .subscribe({
      next: countries => {
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
