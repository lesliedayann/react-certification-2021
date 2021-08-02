import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout.component';

describe('<Layout />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<Layout />);
  });

  test('Render Layout Component', () => {
    expect(wrapper).not.toBeNull();
  });
});
