import React from 'react';
import { create } from 'react-test-renderer';

import RatePage from '../RatePage';

jest.mock('../../RateList', () => 'RateList');
jest.mock('../../InfoBanner', () => 'InfoBanner');

describe('COMPONENT - RatePage', () => {
  it('renders correctly', () => {
    const component = create(<RatePage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
