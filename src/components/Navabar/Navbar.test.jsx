import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider, AppContext } from '../../utils/AppContext.provider';
import Navbar from './Navbar.component';

describe('<Navbar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AppProvider>
        <Navbar />
      </AppProvider>
    );
  });
  test('main container should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Render the search input', () => {
    const search = screen.getByPlaceholderText(/Search/i);
    expect(search.value).toBe('wizeline');
  });

  test('Render Layout Component', () => {
    expect(wrapper).not.toBeNull();
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
});

describe('<Navbar /> logged ', () => {
  const state = {
    search: 'wizeline',
    sessionData: {
      id: 'user1',
      username: 'user1',
    },
    logged: true,
    videos: [],
    darkMode: true,
  };
  const setDarkMode = jest.fn();
  const removeSessionData = jest.fn();

  beforeEach(() => {
    cleanup();
    render(
      <AppContext.Provider value={{ state, setDarkMode, removeSessionData }}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </AppContext.Provider>
    );
  });
  test('Render logout Menu', () => {
    const menuButton = screen.queryByTestId(/account-login-menu/i);
    fireEvent.click(menuButton);
    const option = screen.getByText(/Logout/i);
    expect(option).toBeInTheDocument();
  });
  test('Render logout Menu, show username', () => {
    const menuButton = screen.queryByTestId(/account-login-menu/i);
    fireEvent.click(menuButton);
    const username = screen.getByText(state.sessionData.username);
    expect(username).toBeInTheDocument();
  });
  test('Render logout Menu, click Fav videos', () => {
    const menuButton = screen.queryByTestId(/account-login-menu/i);
    fireEvent.click(menuButton);
    const favButton = screen.getByText('Favorite Videos');
    fireEvent.click(favButton);
    const menu = screen.getByTestId('primary-search-account-menu');
    expect(menu).toBeInTheDocument();
  });
  test('Render the dark mode event', () => {
    const button = screen.getByLabelText('Dark Mode');
    fireEvent.click(button);
    expect(setDarkMode).toHaveBeenCalledTimes(1);
  });
  test('Click logout option', () => {
    const menuButton = screen.queryByTestId(/account-login-menu/i);
    fireEvent.click(menuButton);
    const option = screen.getByText(/Logout/i);
    fireEvent.click(option);
    expect(removeSessionData).toHaveBeenCalledTimes(1);
  });
});
