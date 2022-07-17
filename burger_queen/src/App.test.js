import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Componente App', () => {
  render(
  <App/>
)
  const link = screen.getByText(/learn react/i)
  expect(link).toBeInTheDocument()
});
