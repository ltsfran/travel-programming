import * as React from 'react';

export function Title({ title, onClick }) {

  return(
    <>
      <div className="c-title">{title}</div>   
      <button onClick={onClick}>Click</button>
    </>
  );
}