import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar.component';

describe('<Navbar />', () => {
  beforeEach(() => {
    render(<Navbar />);
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
});
