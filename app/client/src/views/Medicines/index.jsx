import * as React from 'react';
import { DescriptionFeature } from './description';

export function Medicines() {
  return (
    <div className="s-content">
      <div className="s-content__input"></div>
      <DescriptionFeature />
      <div>Estás en los Medicamentos</div>
    </div>
  );
}