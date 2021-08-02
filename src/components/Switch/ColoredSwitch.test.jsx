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
  let wrapper;
  beforeEach(() => {
    wrapper = render(<ColoredSwitch {...props} />);
  });
  test('Render ColoredSwitch component', () => {
    expect(wrapper).not.toBeNull();
  });
  test('renders by Dark Mode', () => {
    const darkMode = screen.getByText(/Dark Mode/i);
    expect(darkMode).toBeInTheDocument();
  });
  test('Render after click', () => {
    const { getByRole } = wrapper;
    const button = getByRole('checkbox');
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
