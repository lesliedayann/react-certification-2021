import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';
import { AppProvider, AppContext } from '../../utils/AppContext.provider';

describe('<Layout />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AppProvider>
        <Layout>
          <p>This is a child</p>
        </Layout>
      </AppProvider>
    );
  });
  test('main container should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Render Layout Component', () => {
    expect(wrapper).not.toBeNull();
  });

  test('Render children', () => {
    const title = screen.getByText('This is a child');
    expect(title).toBeInTheDocument();
  });
  test('Render background-light', () => {
    const mainElement = screen.queryByRole('main');
    expect(mainElement.classList.contains('background-light')).toBe(true);
  });

  test('Render background-dark, darkMode: true', () => {
    const { container } = render(
      <AppContext.Provider value={{ state: { darkMode: true } }}>
        <Layout>
          <p>This is a child element</p>
        </Layout>
      </AppContext.Provider>
    );
    const mainElement = container.getElementsByClassName('background-dark');
    expect(mainElement.length).toBe(1);
  });
});
