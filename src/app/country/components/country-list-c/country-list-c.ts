import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country-i';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-country-list-c',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list-c.html',
  styleUrl: './country-list-c.css'
})
export class CountryListC {

  countries = input<Country[]>()

  errorMessage = input<string | null>()
  isLoading = input<boolean>()
  isEmpty = input<boolean>()


}
