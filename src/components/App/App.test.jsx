import React from 'react';
import { render } from '@testing-library/react';
import App from './App.component';

describe('Testing App component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<App />);
  });

  it('should to take snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
