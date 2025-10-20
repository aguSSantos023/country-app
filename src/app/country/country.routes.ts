import { Routes } from '@angular/router';
import { ByCapitalP } from './pages/by-capital-p/by-capital-p';

const countryRoutes: Routes = [
  {
    path: '',
    component: ByCapitalP
  },
  // {
  //   path: 'country',
  // },
  // {
  //   path: '**',
  //   redirectTo: ''
  // }
];


export default countryRoutes;
