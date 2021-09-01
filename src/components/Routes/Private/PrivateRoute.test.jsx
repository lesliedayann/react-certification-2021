import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.component';
import Home from '../../../pages/Home/Home.page';
import { AppProvider } from '../../../utils/AppContext.provider';

describe('<PrivateRoute />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AppProvider>
        <BrowserRouter>
          <PrivateRoute exact path="/" component={Home} />
        </BrowserRouter>
      </AppProvider>
    );
  });

  test('Render PrivateRoute', () => {
    expect(wrapper).not.toBeNull();
  });
});
