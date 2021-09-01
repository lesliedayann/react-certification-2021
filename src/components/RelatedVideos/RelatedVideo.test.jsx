import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RelatedVideo from './RelatedVideo.component';
import { AppProvider } from '../../utils/AppContext.provider';

describe('Testing RelatedVideo component', () => {
  let wrapper;
  const videoData = [
    {
      id: {
        kind: 'youtube#video',
        videoId: 'nmXMgqjQzls',
      },
      snippet: {
        title: 'This is a title 1',
        description: 'this is a desciption1',
        thumbnails: {
          high: {
            url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
          },
        },
      },
    },
    {
      id: {
        kind: 'youtube#video',
        videoId: 'fgfhhfgh',
      },
      snippet: {
        title: 'This is a title 2',
        description: 'this is a desciption 2',
        thumbnails: {
          high: {
            url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
          },
        },
      },
    },
  ];
  beforeEach(() => {
    wrapper = render(
      <AppProvider>
        <BrowserRouter>
          <RelatedVideo
            currentVideoId="nmXMgqjQzls"
            videos={{ items: videoData }}
            path="video"
          />
        </BrowserRouter>
      </AppProvider>
    );
  });

  test('Render RelatedVideo component', () => {
    expect(wrapper).not.toBeNull();
  });
  test('Test if is rendering just once <RelatedVideoCard>', () => {
    const link = screen.getAllByRole('link');
    expect(link.length).toBe(1);
  });
  test('Render Only the component that is no repeated: title', () => {
    const title = screen.getByText(videoData[1].snippet.title);
    expect(title).toBeInTheDocument();
  });
  test('Render Only the component that is no repeated: image', () => {
    const thumbnail = screen.getByRole('img');
    expect(thumbnail).toHaveAttribute('src', videoData[1].snippet.thumbnails.high.url);
  });
  test('Render Only the component that is no repeated: link', () => {
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/video/${videoData[1].id.videoId}`);
  });
});
