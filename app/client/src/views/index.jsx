import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { Header } from './../components/Header';
import { Chat } from './../components/Chat';
import './style.css'


const items = [
  // {
  //   label: 'Inicio',
  //   icon: 'plus',
  //   link: '/'
  // },
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
  // {
  //   label: 'Nosotros',
  //   icon: 'plus',
  //   link: '/nosotros'
  // }
]

export function App({route}) {
  return (
    <div className="p-content">
      <Header items={items}/>
      {renderRoutes(route.routes)}
      <Chat />
    </div>
  );
}
