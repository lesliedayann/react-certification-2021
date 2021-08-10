import React from 'react';
import { render } from '@testing-library/react';
import RelatedVideo from './RelatedVideo.component';

describe('Testing RelatedVideo component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<RelatedVideo currentVideoId="nmXMgqjQzls" />);
  });

  test('Render RelatedVideo component', () => {
    expect(wrapper).not.toBeNull();
  });
});
