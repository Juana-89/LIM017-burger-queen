import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { LocationDisplay } from './app';
import { MemoryRouter } from 'react-router-dom';

test('Renderizando un componente que usa useLocation', () => {
  const route = '/some-route'
  render(
  <MemoryRouter initialEntries = {[route]}>
  <LocationDisplay />
  </MemoryRouter>
  )
  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
});