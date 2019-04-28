import * as React from 'react';

import { App } from './../views';
import { Home } from './../views/Home';
import { Medicines } from './../views/Medicines';

const pathBase = '';

function NotFound() {
  return (
    <div>Página no encontrada</div>
  )
};

export const Routes = [
  {
    component: App,
    routes: [
      {
        path: `${pathBase}/`,
        component: Home,
        exact: true,
      },
      {
        path: `${pathBase}/medicines`,
        component: Medicines,
        exact: true
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]