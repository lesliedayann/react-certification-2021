import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider, AppContext } from '../../../utils/AppContext.provider';
import FavoriteVideoDetails from './FavoriteVideoDetails.page';

const location = {
  pathname: '/video/nmXMgqjQzls',
  state: {
    videoTitle: 'Wizeline',
    videoDescription: 'Wizeline transforms how teams build technology.',
    image:
      'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
  },
};
describe('<FavoriteVideoDetails />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AppProvider>
        <MemoryRouter initialEntries={[location]}>
          <FavoriteVideoDetails />
        </MemoryRouter>
      </AppProvider>
    );
  });

  test('Render Video Template Page', () => {
    expect(wrapper).not.toBeNull();
  });
  test('Render a Video card with info: title', () => {
    const title = screen.getByText(location.state.videoTitle);
    expect(title).toBeInTheDocument();
  });
  test('Dark mode should not be the theme', () => {
    const mainElement = screen.getByTestId('favVideoDetails-page');
    expect(mainElement).not.toHaveClass('bg-dark');
  });
  test('Render a Video card with info: title', () => {
    const title = screen.getByText(location.state.videoTitle);
    expect(title).toBeInTheDocument();
  });
  test('Render a Video card with info: description', () => {
    const descriptionElement = screen.getByText(location.state.videoDescription);
    expect(descriptionElement).toBeInTheDocument();
  });
  test('Aside Section should be empty', () => {
    const asideSection = screen.getByTestId('favRelatedVideos');
    expect(asideSection).toBeEmptyDOMElement();
  });
});

describe('', () => {
  const state = {
    search: 'wizeline',
    sessionData: {
      id: 'user1',
      username: 'user1',
    },
    logged: true,
    videos: [],
    darkMode: true,
  };
  beforeEach(() => {
    cleanup();
    render(
      <AppContext.Provider value={{ state }}>
        <MemoryRouter initialEntries={[location]}>
          <FavoriteVideoDetails />
        </MemoryRouter>
      </AppContext.Provider>
    );
  });
  test('Dark mode should be the theme', () => {
    const mainElement = screen.getByTestId('favVideoDetails-page');
    expect(mainElement).toHaveClass('bg-dark');
  });
});
