import { Routes } from '@angular/router';
import { HomeP } from './shared/pages/home-p/home-p';

export const routes: Routes = [
  {
    path: '',
    component: HomeP
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes')
  },
  {
    path: '**',
    redirectTo: ''
  }
];
