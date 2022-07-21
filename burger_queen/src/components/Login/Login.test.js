import * as React from 'react';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Login }  from './Login';
import { AuthProvider, useAuth } from '../../context/authContext.js';
import MutationObserver from 'mutation-observer';
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

test("Usuario '/waiter' registrado y logueado", async () => {

    const history = createMemoryHistory();
    render(
    <AuthProvider>
    <Router location={history.location} navigator={history}>
    <Login />
    </Router>
    </AuthProvider>
    );
    const inputEmail = screen.getByPlaceholderText("juatha88@gmail.com");
    const inputPassword = screen.getByPlaceholderText("burgerqueen");
    const btnLogin = await screen.findByText("Ingresar");

    fireEvent.change(inputEmail, { target: { value: "waiter@burguer-queen.com" } });
    fireEvent.change(inputPassword, { target: { value: "burgerqueen" } });
    fireEvent.click(btnLogin);

    await waitFor(() => {
        expect(history.location.pathname).toBe("/waiter");
    });
});

test("Cocinero registrado y logueado", async () => {

    const history = createMemoryHistory();
    render(
    <AuthProvider>
    <Router location={history.location} navigator={history}>
    <Login />
    </Router>
    </AuthProvider>
    );
    const inputEmail = screen.getByPlaceholderText("juatha88@gmail.com");
    const inputPassword = screen.getByPlaceholderText("burgerqueen");
    const btnLogin = await screen.findByText("Ingresar");

    fireEvent.change(inputEmail, { target: { value: "cook_boss@burguer-queen.com" } });
    fireEvent.change(inputPassword, { target: { value: "111111" } });
    fireEvent.click(btnLogin);

    await waitFor(() => {
        expect(history.location.pathname).toBe("/kitchen");
    });
})

test.only('Muestra error de usuario no registrado', async () => {
    const history = createMemoryHistory();
    render(
    <AuthProvider>
    <Router location={history.location} navigator={history}>
    <Login />
    </Router>
    </AuthProvider>
    );
    const inputEmail = screen.getByPlaceholderText("juatha88@gmail.com");
    const inputPassword = screen.getByPlaceholderText("burgerqueen");
    const btnLogin = await screen.findByText("Ingresar");
      
    fireEvent.change(inputEmail, { target: { value: "maria88@gmail.com" } });
    fireEvent.change(inputPassword, { target: { value: "111111" } });
    fireEvent.click(btnLogin);
     
    await waitFor(() => {
       const error = screen.queryByTestId('auth/invalid-password')
       expect(error).toBe(error.message);
})})
