import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout.component';
import { AppContext } from '../../utils/AppContext.provider';

describe('<Layout />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AppContext>
        <Layout />
      </AppContext>
    );
  });

  test('Render Layout Component', () => {
    expect(wrapper).not.toBeNull();
  });
});
