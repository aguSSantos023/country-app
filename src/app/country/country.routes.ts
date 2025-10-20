import { Routes } from '@angular/router';
import { CountryLayoutC } from './layouts/country-layout-c/country-layout-c';
import { ByCapitalP } from './pages/by-capital-p/by-capital-p';

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutC,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalP
      },
      // {

      // },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  },
  // {
  //   path: 'country',
  // },

];


export default countryRoutes;
