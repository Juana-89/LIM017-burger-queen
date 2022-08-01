import * as React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter  } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import  Inputs   from './Inputs';
import { AuthProvider } from '../../../context/authContext.js';

test ('Renderizando componente Inputs', () => {
    const history = createMemoryHistory()
    render(
    <AuthProvider>
    <BrowserRouter  location={history.location} navigator={history}>
    <Inputs />
    </BrowserRouter >
    </AuthProvider>
    );
    const txtClient = screen.getByText(/Cliente:/i)
    const txtTable = screen.getByText(/Mesa:/i)
    expect(txtClient).toBeInTheDocument();
    expect(txtTable).toBeInTheDocument();
});