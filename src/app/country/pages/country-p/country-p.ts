import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/country-i';
import { CountryS } from '../../services/country-s';
import { NotFoundC } from '../../../shared/components/not-found-c/not-found-c';
import { CountryInformationC } from './country-information-c/country-information-c';

@Component({
  selector: 'app-country-p',
  imports: [NotFoundC, CountryInformationC],
  templateUrl: './country-p.html',
  styleUrl: './country-p.css'
})
export class CountryP {

  countryCode = inject(ActivatedRoute).snapshot.params['code']
  countryServices = inject(CountryS)


  country = signal<Country | undefined>(undefined)

  isError = signal<Boolean>(false)


  constructor(){
    this.callCodeAlpha()
  }


  callCodeAlpha(){

    this.countryServices.searchCountryByAlphaCode(this.countryCode)
    .subscribe({
      next: country => {

        if (!country) return

        this.country.set(country)
      },
      error: err => {
        this.country.set(undefined);
        this.isError.set(true)
      }
    })
  }


}
