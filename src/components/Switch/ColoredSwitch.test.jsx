import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ColoredSwitch from './ColoredSwitch.component';

describe('<ColoredSwitch />', () => {
  const mockHandler = jest.fn();
  const props = {
    checked: false,
    toggleSwitch: mockHandler,
    switchColor: 'white',
    label: 'Dark Mode',
  };
  beforeEach(() => {
    render(<ColoredSwitch {...props} />);
  });
  test('Render ColoredSwitch component', () => {
    expect(screen).not.toBeNull();
  });
  test('Render the dark mode text', () => {
    const darkMode = screen.getByText(/Dark Mode/i);
    expect(darkMode).toBeInTheDocument();
  });
  test('Render after click', () => {
    const button = screen.getByRole('checkbox');
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
