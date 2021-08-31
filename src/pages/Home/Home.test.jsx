import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../../utils/AppContext.provider';
import Home from './Home.page';

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AppProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </AppProvider>
    );
  });

  test('Render Home Page', () => {
    expect(wrapper).not.toBeNull();
  });
});
