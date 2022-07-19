import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import App from './App';
import { Login} from './components/Login/Login'

test('renders learn react link', () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);
  
  const inputUser = screen.getByPlaceholderText(/juatha88@gmail.com/i);
  expect(inputUser).toBeInTheDocument();

  const inputPassword = screen.getByPlaceholderText(/burgerqueen/i);
  expect(inputPassword).toBeInTheDocument();
});

test('Clicking the Login button', () => {
  render(
    <BrowserRouter>
    <Login />
    </BrowserRouter>);

  const Button = screen.getByText('Ingresar');
  expect(Button).not.toBeDisabled();
});