import React from 'react';
import { mount } from 'enzyme';
import Layout from './Layout.component';
import { AppProvider, AppContext } from '../../utils/AppContext.provider';

describe('<Layout />', () => {
  const wrapper = mount(
    <AppProvider>
      <Layout>
        <p>This is a child</p>
      </Layout>
    </AppProvider>
  );

  test('main container should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Render Layout Component', () => {
    expect(wrapper).not.toBeNull();
  });

  test('Render children', () => {
    expect(wrapper.find('p').exists()).toBe(true);
  });
  test('Render background-light', () => {
    expect(wrapper.find('.background-light').exists()).toBe(true);
  });

  test('Render background-dark, darkMode: true', () => {
    const layoutMain = mount(
      <AppContext.Provider value={{ state: { darkMode: true } }}>
        <Layout>
          <p>This is a child</p>
        </Layout>
      </AppContext.Provider>
    );
    expect(layoutMain.find('.background-dark').exists()).toBe(true);
  });
});
