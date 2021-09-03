import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideosContainer from '.';
import { AppProvider } from '../../utils/AppContext.provider';
import viedeosData from '../../utils/youtube-videos-mock.json';

describe('<Videos Container/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(
      <AppProvider>
        <BrowserRouter>
          <VideosContainer videos={viedeosData} />
        </BrowserRouter>
      </AppProvider>
    );
  });

  test('Render Videos Container Page', () => {
    expect(wrapper).not.toBeNull();
  });

  test('find a title from the videosData', () => {
    const title = screen.getByText(viedeosData.items[0].snippet.title);
    expect(title).toBeInTheDocument();
  });

  test('find a description from the videosData', () => {
    const description = screen.getByText(viedeosData.items[1].snippet.description);
    expect(description).toBeInTheDocument();
  });
});
