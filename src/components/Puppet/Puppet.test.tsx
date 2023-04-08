import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Puppet from './Puppet';
import { PuppetModel } from '../../model/PuppetModel';

describe('<Puppet />', () => {
  const puppetModel: PuppetModel = new PuppetModel();

  test('it should mount', () => {
    render(<Puppet puppet={puppetModel} />);
    
    const puppet = screen.getByTestId('Puppet');

    expect(puppet).toBeInTheDocument();
  });
});