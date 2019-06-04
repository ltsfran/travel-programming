import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { Header } from './../components/Header';

import './style.css'

const items = [
  {
    label: 'Home',
    icon: 'plus'
  },
  {
    label: 'Medicinas',
    icon: 'plus'
  },
  {
    label: 'Enfermedades',
    icon: 'plus'
  },
  {
    label: 'Nosotros',
    icon: 'plus'
  }
]

export function App({route}) {
  return (
    <div className="p-content">
      <Header items={items}/>
      {renderRoutes(route.routes)}
    </div>
  );
}