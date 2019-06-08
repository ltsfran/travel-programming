import * as React from 'react';

export function SearchMedicines({
  handleClick
}) {
  return(
    <div>
      <button onClick={handleClick}>Buscar</button>
    </div>
  );
}