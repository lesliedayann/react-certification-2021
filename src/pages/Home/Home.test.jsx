import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home.page';

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  test('Render Home Page', () => {
    expect(wrapper).not.toBeNull();
  });
});
