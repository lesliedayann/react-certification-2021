import React from 'react';
import { render } from '@testing-library/react';
import RelatedVideo from './RelatedVideo.component';

describe('Testing RelatedVideo component', () => {
  let wrapper;
  const videoData = {
    id: {
      kind: 'youtube#video',
      videoId: 'nmXMgqjQzls',
    },
    snippet: {
      title: 'This is a title',
      description: 'this is a desciption',
      thumbnails: {
        high: {
          url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
        },
      },
    },
  };
  beforeEach(() => {
    wrapper = render(
      <RelatedVideo
        currentVideoId="nmXMgqjQzls"
        videos={{ items: [videoData] }}
        path="video"
      />
    );
  });

  test('Render RelatedVideo component', () => {
    expect(wrapper).not.toBeNull();
  });
});
