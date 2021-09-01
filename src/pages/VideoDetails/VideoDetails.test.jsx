import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '../../utils/AppContext.provider';
import Video from './VideoDetails.page';

describe('<Video />', () => {
  const location = {
    pathname: '/video/nmXMgqjQzls',
    state: {
      videoTitle: 'Wizeline',
      videoDescription: 'Wizeline transforms how teams build technology.',
      image:
        'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
    },
  };

  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AppProvider>
        <MemoryRouter initialEntries={[location]}>
          <Video />
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
  test('Render a Video card with info: description', () => {
    const descriptionElement = screen.getByText(location.state.videoDescription);
    expect(descriptionElement).toBeInTheDocument();
  });
});
