import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Video from './Video.page';

describe('<Video />', () => {
  global.window = { location: { pathname: 'nmXMgqjQzls' } };
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <Video />
      </BrowserRouter>
    );
  });

  test('Render Video Template Page', () => {
    expect(wrapper).not.toBeNull();
  });
});
