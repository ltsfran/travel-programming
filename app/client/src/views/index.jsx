import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { Header } from './../components/Header';
import { Title } from '../components/Title/Title';
import { Input } from '../components/Input';
import { SearchMedicines } from '../components/SearchMedicines';
import './style.css'


const items = [
  {
    label: 'Home',
    icon: 'plus',
    link: '/'
  },
  {
    label: 'Medicinas',
    icon: 'plus',
    link: '/medicinas'
  },
  {
    label: 'Enfermedades',
    icon: 'plus',
    link: '/enfermedades'
  },
  {
    label: 'Nosotros',
    icon: 'plus',
    link: '/nosotros'
  }
]

export function App({route}) {
  return (
    <div className="p-content">
      <Header items={items}/>
      <Title/>
      <Input/>
      <SearchMedicines/>
      {renderRoutes(route.routes)}
    </div>
  );
}