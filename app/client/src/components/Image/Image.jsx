import * as React from 'react';
import './style.css';

export function Image({ src }){
  return (
    <img className="c-image" src={src}/>
  );
};
