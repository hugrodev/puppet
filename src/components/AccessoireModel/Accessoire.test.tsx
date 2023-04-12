import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Accesoire from './Accessoire';
import { AccessoireModel } from '../../model/AccessoireModel';
import CATG_NB from '../../constantes/AccessoireConst';

describe('<Accessoire />', () => {
  const accessoireModel: AccessoireModel = new AccessoireModel(CATG_NB.coupe, "1");

  test('it should mount', () => {
    // render(<Accesoire accessoire={accessoireModel} />);
    
    const accessoire = screen.getByTestId('Accessoire');

    expect(accessoire).toBeInTheDocument();
  });
});