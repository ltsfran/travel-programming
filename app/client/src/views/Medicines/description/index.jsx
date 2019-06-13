import * as React from 'react';
import { TitleContainer } from './components/Title';
import { TextContainer } from './components/Text';
import { SearchMedicinesContainer } from './components/SearchMedicines';
import { ImageContainer } from './components/Image';

export function DescriptionFeature() {
  return(
    <>
      <SearchMedicinesContainer />
      <TitleContainer />
      <ImageContainer />
      <TextContainer />
    </>
  );
}
