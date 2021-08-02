import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoCard from './VideoCard.component';

describe('<VideoCard />', () => {
  const correctProps = {
    imageURL:
      'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
    title: 'this is a little title',
    description: 'this is a description',
    videoId: 'nmXMgqjQzls',
  };
  beforeEach(() => {
    render(
      <BrowserRouter>
        <VideoCard {...correctProps} />
      </BrowserRouter>
    );
  });

  test('render component by title', () => {
    const titleElement = screen.getByText(correctProps.title);
    expect(titleElement).toBeInTheDocument();
  });
  test('render component by description', () => {
    const descriptionElement = screen.getByText(correctProps.description);
    expect(descriptionElement).toBeInTheDocument();
  });
});
