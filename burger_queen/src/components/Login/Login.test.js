import * as React from 'react';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Login }  from './Login';
import { AuthProvider, AuthContext } from '../../context/authContext.js';
import  MutationObserver  from 'mutation-observer';
global.MutationObserver = MutationObserver 

jest.mock('../../context/authContext.js');

test ('Renderizando texto que está en el componente Login', () => {
    const history = createMemoryHistory()
    render(
    <AuthProvider>
    <Router location={history.location} navigator={history}>
    <Login />
    </Router>
    </AuthProvider>
    );
    const txtLogin = screen.getByText(/Ingreso de personal autorizado/i)
    expect(txtLogin).toBeInTheDocument();
});

test ('Renderizando texto que está en los labels', () => {
    const history = createMemoryHistory()
    render(
    <AuthContext.Provider>
    <Router location={history.location} navigator={history}>
    <Login />
    </Router>
    </AuthContext.Provider>
    );
    const txtLabelEmail = screen.getByLabelText('Correo electrónico')
    const txtLabelPassword = screen.getByLabelText('Contraseña')
    expect(txtLabelEmail).toBeInTheDocument();
    expect(txtLabelPassword).toBeInTheDocument();
});

    test.only("usuario identificado", async () => {
      const history = createMemoryHistory();
      render(
        <AuthProvider>
        <Router location={history.location} navigator={history}>
          <Login />
        </Router>
        </AuthProvider>
      );
      const emailInput = screen.getByPlaceholderText("juatha88@gmail.com");
      const pswInput = screen.getByPlaceholderText("burgerqueen");
      const btnLogin = await screen.findByText("Ingresar");
  
      fireEvent.change(emailInput, { target: { value: "" } });
      fireEvent.change(pswInput, { target: { value: "" } });
      fireEvent.click(btnLogin);
  
      await waitFor(() => {
        expect(history.location.pathname).toBe("/waiter");
      });
    });

 