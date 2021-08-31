import React from 'react';
import { render } from '@testing-library/react';
import App from './App.component';
import { AppProvider } from '../../utils/AppContext.provider';

describe('Testing App component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AppProvider>
        <App />
      </AppProvider>
    );
  });

  it('should to take snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
