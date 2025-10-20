import { Routes } from '@angular/router';
import { CountryLayoutC } from './layouts/country-layout-c/country-layout-c';
import { ByCapitalP } from './pages/by-capital-p/by-capital-p';
import { ByCountryP } from './pages/by-country-p/by-country-p';
import { ByRegionP } from './pages/by-region-p/by-region-p';
import { CountryP } from './pages/country-p/country-p';

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutC,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalP
      },
      {
        path: 'by-country',
        component: ByCountryP
      },
      {
        path: 'by-region',
        component: ByRegionP
      },
      {
        path: 'by/:code',
        component: CountryP
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  },


];


export default countryRoutes;
