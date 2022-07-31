import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../context/authContext.js';
import { Welcome } from '../Welcome/Welcome.js';

test('Renderizando contenido del div principal de Welcome', async () => {
    const history = createMemoryHistory()
    render(
    <AuthProvider>
    <BrowserRouter history={history.location} navigator={history}>
    <Welcome />
    </BrowserRouter>
    </AuthProvider>
    );
    const containerWelcome = screen.getByTestId('containerWelcome')
    expect(containerWelcome).toBeInTheDocument();
})