import * as React from 'react';
import { DescriptionFeature } from './description';
import { Image } from '../../components/Image';

export function Medicines() {
  return (
    <div className="s-content">
      <div className="s-content__input"></div>
      <DescriptionFeature />
      <Image src="https://www.redaccionmedica.com/images/destacados/tomar-paracetamol-durante-el-embarazo-reduce-la-fertilidad-de-las-hijas-5708_620x368.jpg"/>
      <div>Estás en los Medicamentos</div>
    </div>
  );
}
