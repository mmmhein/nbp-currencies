import React from 'react';
import { create } from 'react-test-renderer';

import LandingPage from '../LandingPage';

jest.mock('../../FollowedRateList', () => 'FollowedRateList');
jest.mock('../../InfoBanner', () => 'InfoBanner');

describe('COMPONENT - LandingPage', () => {
  it('renders correctly', () => {
    const component = create(<LandingPage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
