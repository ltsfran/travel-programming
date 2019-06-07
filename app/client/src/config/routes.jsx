import * as React from 'react';

import { App } from './../views';
import { Home } from './../views/Home';
import { Medicines } from './../views/Medicines';
import { Diseases } from './../views/Diseases';
import { Us } from './../views/Us';

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
        path: `${pathBase}/medicinas`,
        component: Medicines,
        exact: true
      },
      {
        path: `${pathBase}/enfermedades`,
        component: Diseases,
        exact: true
      },
      {
        path: `${pathBase}/nosotros`,
        component: Us,
        exact: true
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]