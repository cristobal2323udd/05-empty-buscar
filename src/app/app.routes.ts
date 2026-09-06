import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./buscar/buscar.page').then((m) => m.BuscarPage),
  },
];
