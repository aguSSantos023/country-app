import { Component, input } from '@angular/core';
import { Country } from '../../../interfaces/country-i';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-information-c',
  imports: [DecimalPipe],
  templateUrl: './country-information-c.html',
  styleUrl: './country-information-c.css'
})
export class CountryInformationC {

  country = input.required<Country>()
}
