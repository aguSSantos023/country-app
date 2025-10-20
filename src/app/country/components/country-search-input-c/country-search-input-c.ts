import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-country-search-input-c',
  imports: [],
  templateUrl: './country-search-input-c.html',
  styleUrl: './country-search-input-c.css'
})
export class CountrySearchInputC {
  placeholder = input<string>('Buscar')
  valueSearch = output<string>();


  onSearch( value: string ){
    console.log(value);

    this.valueSearch.emit(value)
  }

}
