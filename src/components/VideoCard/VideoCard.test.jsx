import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component';
import { AppProvider, AppContext } from '../../utils/AppContext.provider';

describe('<VideoCard />', () => {
  const props = {
    imageURL:
      'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
    title: 'this is a little title',
    description: 'this is a description',
  };
  const state = {
    search: 'wizeline',
    sessionData: {
      id: '',
      username: '',
    },
    logged: false,
    videos: [],
    darkMode: true,
  };

  beforeEach(() => {
    render(
      <AppProvider>
        <VideoCard {...props} />
      </AppProvider>
    );
  });

  test('render component by title', () => {
    const titleElement = screen.getByText(props.title);
    expect(titleElement).toBeInTheDocument();
  });
  test('render component by description', () => {
    const descriptionElement = screen.getByText(props.description);
    expect(descriptionElement).toBeInTheDocument();
  });
  test('Testing component image', () => {
    const thumbnail = screen.getByTestId('videoCard-image');
    expect(thumbnail).toHaveStyle(`background-image: url(${props.imageURL})`);
  });
  test('Testing dark mode component ', () => {
    const { container } = render(
      <AppContext.Provider value={{ state }}>
        <VideoCard {...props} />
      </AppContext.Provider>
    );
    expect(container.getElementsByClassName('card-dark').length).toBe(1);
  });
});
