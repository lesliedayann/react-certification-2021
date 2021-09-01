import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { mount } from 'enzyme';
import { AppProvider, AppContext } from '../../utils/AppContext.provider';
import Navbar from './Navbar.component';

describe('<Navbar />', () => {
  beforeEach(() => {
    render(
      <AppProvider>
        <Navbar />
      </AppProvider>
    );
  });

  test('Render the search input', () => {
    const search = screen.getByPlaceholderText(/Search/i);
    expect(search).toBeInTheDocument();
  });

  test('Input Value', () => {
    const search = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(search, { target: { value: 'wizeline academy' } });
    expect(search.value).toBe('wizeline academy');
  });

  test('Render the dark mode text', () => {
    const darkMode = screen.getByText(/Dark Mode/i);
    expect(darkMode).toBeInTheDocument();
  });

  test('Render the dark mode event', () => {
    const button = screen.getByLabelText('Dark Mode');
    fireEvent.change(button, {
      target: { value: true },
    });
    expect(button.value).toBe('true');
  });

  test('Login button should show the login Menu', () => {
    const menuButton = screen.queryByTestId(/account-login-menu/i);
    fireEvent.click(menuButton);
    const option = screen.getByText(/Login/i);
    fireEvent.click(option);
    expect(option).toBeInTheDocument();
  });

  const state = {
    search: 'wizeline',
    sessionData: {
      id: 'user1',
      username: 'user1',
    },
    logged: true,
    videos: [],
    darkMode: false,
  };

  mount(
    <AppContext.Provider value={{ state }}>
      <Navbar />
    </AppContext.Provider>
  );

  test('Render logout Menu, user is logged', () => {
    const menuButton = screen.queryByTestId(/account-login-menu/i);
    fireEvent.click(menuButton);
    const option = screen.getByText(/Logout/i);
    expect(option).toBeInTheDocument();
  });

  test('Render logout Menu, user is logged, show username', () => {
    const menuButton = screen.queryByTestId(/account-login-menu/i);
    fireEvent.click(menuButton);
    const username = screen.getByText(state.sessionData.username);
    expect(username).toBeInTheDocument();
  });
});
