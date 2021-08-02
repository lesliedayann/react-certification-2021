import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar.component';

describe('<Navbar />', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test('Render the search input', () => {
    const search = screen.getByPlaceholderText(/Search/i);
    expect(search).toBeInTheDocument();
  });
  test('Render the dark mode text', () => {
    const darkMode = screen.getByText(/Dark Mode/i);
    expect(darkMode).toBeInTheDocument();
  });
});
