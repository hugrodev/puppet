import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Panel from './Pannel';
describe('<Panel />', () => {
  test('it should mount', () => {
    
    const Panel = screen.getByTestId('Panel');

    expect(Panel).toBeInTheDocument();
  });
});