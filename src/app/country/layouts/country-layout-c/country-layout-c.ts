import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from "../../components/top-menu/top-menu";

@Component({
  selector: 'app-country-layout-c',
  imports: [RouterOutlet, TopMenu],
  templateUrl: './country-layout-c.html',
  styleUrl: './country-layout-c.css'
})
export class CountryLayoutC {

}
