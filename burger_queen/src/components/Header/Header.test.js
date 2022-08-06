import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { AuthProvider } from '../../context/authContext.js';
import Header  from './Header';
import MutationObserver from 'mutation-observer';
global.MutationObserver = MutationObserver

jest.mock('../../context/authContext.js')

test ('Renderizando botón de logout', () => {
    const history = createMemoryHistory()
    render(
    <AuthProvider>
    <BrowserRouter location={history.location} navigator={history}>
    <Header />
    </BrowserRouter>
    </AuthProvider>
    );
    const containerWelcome = screen.getByTestId('containerHeader')
    expect(containerWelcome).toBeInTheDocument();
});

test ('Debería de retornar al componente de carga', async () => {
    const history = createMemoryHistory();
    render(
    <AuthProvider>
    <BrowserRouter location={history.location} navigator={history}>
    <Header />
    </BrowserRouter>
    </AuthProvider>
    );
    const containerWelcome = await screen.getByTestId('btnLogout')
    fireEvent.click(containerWelcome);
    await waitFor(() => {
    expect(history.location.pathname).toBe('/');
    })
});