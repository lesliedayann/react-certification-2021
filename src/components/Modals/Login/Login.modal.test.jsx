import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AppProvider } from '../../../utils/AppContext.provider';
import Login from './Login.modal';

describe('<Login />', () => {
  const mockHandler = jest.fn();
  const props = {
    open: true,
    handleClose: mockHandler,
  };
  beforeEach(() => {
    render(
      <AppProvider>
        <Login {...props} />
      </AppProvider>
    );
  });

  test('Render Login Modal component', () => {
    expect(screen).not.toBeNull();
  });

  test('Username input Value', () => {
    const search = screen.getByLabelText(/Username/i);
    fireEvent.change(search, { target: { value: 'wizeline' } });
    expect(search.value).toBe('wizeline');
  });

  test('Password input Value', () => {
    const search = screen.getByLabelText(/Password/i);
    fireEvent.change(search, { target: { value: 'mypassword' } });
    expect(search.value).toBe('mypassword');
  });

  test('Render after Cancel click', () => {
    const button = screen.getByText('Cancel');
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test('Render Login button', () => {
    const loginButton = screen.queryByTestId(/login-btn/i);
    expect(loginButton).toBeInTheDocument();
  });
});
