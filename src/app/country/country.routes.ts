import { Routes } from '@angular/router';
import ByCapitalPageComponent from './pages/by-capital-page/by-capital-page.component';
import CountryLayoutPageComponent from './layouts/country-layout-page/country-layout-page.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutPageComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent
      },
      {
        path: 'by-country',
        loadComponent: () => import('./pages/by-country-page/by-country-page.component')
      },
      {
        path: 'by-region',
        loadComponent: () => import('./pages/by-region-page/by-region-page.component'),
      },
      {
        path: 'by/:codeCountry',
        loadComponent: () => import('./pages/country-page/country-page.component')
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  },
];

export default countryRoutes;
