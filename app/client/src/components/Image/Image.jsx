import * as React from 'react';
import './style.css';

export function Image({ 
  src,
  width,
  height
}){
  return (
    <img className="c-image" 
      style={{width: width, height: height}}
      src={src}
    />
  );
};
