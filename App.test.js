import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { LocationDisplay } from './app';
import { MemoryRouter } from 'react-router-dom';
import {createMemoryHistory} from 'history'
import { Router } from 'react-router-dom'
import { App } from './App'

test('Renderizando un componente que usa useLocation', () => {
  const route = '/some-route'
  render(
  <MemoryRouter initialEntries = {[route]}>
  <LocationDisplay />
  </MemoryRouter>
  )
  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
});

test.only('full app rendering/navigating', async () => {
  const history = createMemoryHistory()
  render(
    <Router history={history.location} navigator={history}>
      <App />
    </Router>,
  )
  // const user = userEvent.setup()
  // // verify page content for expected route
  // // often you'd use a data-testid or role query, but this is also possible
  // expect(screen.getByText(/you are home/i)).toBeInTheDocument()

  // await user.click(screen.getByText(/about/i))

  // // check that the content changed to the new page
  // expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
})