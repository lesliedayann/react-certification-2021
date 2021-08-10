import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RelatedVideoCard from './RelatedVideoCard.component';

describe('<RelatedVideoCard />', () => {
  const props = {
    imageURL:
      'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
    title: 'this is a little title',
    videoId: 'nmXMgqjQzls',
  };
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RelatedVideoCard {...props} />
      </BrowserRouter>
    );
  });

  test('Testing component title', () => {
    const titleElement = screen.getByText(props.title);
    expect(titleElement).toBeInTheDocument();
  });

  test('Testing component image', () => {
    const thumbnail = screen.getByRole('img');
    expect(thumbnail).toHaveAttribute('src', props.imageURL);
  });
});
