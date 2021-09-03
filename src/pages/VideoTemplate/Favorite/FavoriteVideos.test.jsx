import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppContext } from '../../../utils/AppContext.provider';
import FavoriteVideos from './FavoriteVideos.page';

describe('<FavoriteVideos />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AppContext.Provider value={{ state: { sessionData: { username: 'user1' } } }}>
        <FavoriteVideos />
      </AppContext.Provider>
    );
  });

  test('Render Favorite Videos Page', () => {
    expect(wrapper).not.toBeNull();
  });
  test('Render page title', () => {
    const title = screen.getByText('Hi user1 your favorite videos page!');
    expect(title).toBeInTheDocument();
  });
  test('The user does not have favorite videos ', () => {
    const title = screen.getByText(
      'Ops! it seems that you do not have favorite videos yet'
    );
    expect(title).toBeInTheDocument();
  });
});
