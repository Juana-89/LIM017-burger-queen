import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import TableHeader from './TableHeader';

test ('Renderizando cabecera de tabla', () => {
    const history = createMemoryHistory()
    render(
    <Router location={history.location} navigator={history}>
    <TableHeader />
    </Router>
    );
    const containerHeaderTable = screen.getByTestId('thHeader')
    expect(containerHeaderTable).toBeInTheDocument();
});