import * as React from 'react';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, waitFor  } from '@testing-library/react';
import { Login }  from './Login';
import { AuthProvider } from '../../context/authContext.js'

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
    <AuthProvider>
    <Router location={history.location} navigator={history}>
    <Login />
    </Router>
    </AuthProvider>
    );
    const txtLabelEmail = screen.getByLabelText('Correo electrónico')
    const txtLabelPassword = screen.getByLabelText('Contraseña')
    expect(txtLabelEmail).toBeInTheDocument();
    expect(txtLabelPassword).toBeInTheDocument();
});
   