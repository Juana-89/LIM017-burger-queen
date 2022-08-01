import React from 'react';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { signInWithEmailAndPassword, logout }  from '../index';
import { Login }  from './Login';
import { AuthProvider } from '../../../context/authContext.js';
jest.mock('./index.js');

test ('Probando función login', async() => {
    const history = createMemoryHistory()
    render(
        <AuthProvider>
    <Router location={history.location} navigator={history}>
    <Login />
    </Router>
    </AuthProvider>
    );
    const email = screen.getByPlaceholderText('juatha88@gmail.com');
    const password = screen.getByPlaceholderText('burgerqueen');
    fireEvent.change(email, { target: { value: 'juana@burger-queen.com'}})
    fireEvent.change(password, { target: { value: '**********'}})
    fireEvent.click(btnSubmit)
    await waitFor(() => {
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
     })
    });
