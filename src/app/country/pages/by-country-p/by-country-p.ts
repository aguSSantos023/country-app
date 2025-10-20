import { Component } from '@angular/core';
import { CountrySearchInputC } from "../../components/country-search-input-c/country-search-input-c";
import { CountryListC } from "../../components/country-list-c/country-list-c";

@Component({
  selector: 'app-by-country-p',
  imports: [CountrySearchInputC, CountryListC],
  templateUrl: './by-country-p.html',
  styleUrl: './by-country-p.css'
})
export class ByCountryP {

}
