import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../../utils/AppContext.provider';
import NotFound from './NotFound.page';

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AppProvider>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </AppProvider>
    );
  });

  test('Render Home Page', () => {
    expect(wrapper).not.toBeNull();
  });
  test('Testing component image', () => {
    const thumbnail = screen.getByRole('img');
    expect(thumbnail).toHaveAccessibleName('page not found');
  });
});
