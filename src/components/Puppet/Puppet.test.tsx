import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Puppet from './Puppet';

describe('<Puppet />', () => {
  test('it should mount', () => {
    render(<Puppet />);
    
    const puppet = screen.getByTestId('Puppet');

    expect(puppet).toBeInTheDocument();
  });
});