import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries-i';
import { Country } from '../../interfaces/country-i';

@Component({
  selector: 'app-country-list-c',
  imports: [],
  templateUrl: './country-list-c.html',
  styleUrl: './country-list-c.css'
})
export class CountryListC {

  countries = input<Country[]>()
}
