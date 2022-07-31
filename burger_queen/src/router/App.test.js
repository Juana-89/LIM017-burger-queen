import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { LocationDisplay } from './app';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/authContext.js';
import App from './App';

test('Renderizando un componente que usa useLocation', () => {
  const route = '/some-route'
  render(
  <MemoryRouter initialEntries = {[route]}>
  <LocationDisplay />
  </MemoryRouter>
  )
  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
});

test('Renderizando App', async () => {
  render(
  <AuthProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </AuthProvider>
  )
});