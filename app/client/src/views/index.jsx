import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { MenuBar } from './../components/MenuBar';

const items = [
  {
    label: "Text"
  },
  {
    label: "Text"
  },
  {
    label: "Text"
  },
  {
    label: "Text"
  },
  {
    label: "Text"
  },
  {
    label: "Text"
  },
]

export function App({route}) {
  return (
    <>
      <MenuBar items={items}/>
      {renderRoutes(route.routes)}
    </>
  );
}