import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedVideoCard from './RelatedVideoCard.component';
import { AppProvider } from '../../../utils/AppContext.provider';

describe('<RelatedVideoCard />', () => {
  const props = {
    imageURL:
      'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
    title: 'this is a little title',
  };
  beforeEach(() => {
    render(
      <AppProvider>
        <RelatedVideoCard {...props} />
      </AppProvider>
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
