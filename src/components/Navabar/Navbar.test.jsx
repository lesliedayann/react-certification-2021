import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Navbar from './Navbar.component';

describe('<Navbar />', ()=>{
    const mockHandler = jest.fn();
    test('Render Navbar component', ()=>{
        render(<Navbar />)
    });
    test('renders by Search', () => {
        render(<Navbar />);
        const search = screen.getByPlaceholderText(/Search/i);
        expect(search).toBeInTheDocument();
    });
    test('renders by Dark Mode', () => {
        render(<Navbar />);
        const darkMode = screen.getByText(/Dark Mode/i);
        expect(darkMode).toBeInTheDocument();
    });
});
