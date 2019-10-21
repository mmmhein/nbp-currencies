import React from 'react';
import { create } from 'react-test-renderer';

import InfoBanner from '../InfoBanner';

describe('COMPONENT - InfoBanner', () => {
  it('renders correctly', () => {
    const component = create(<InfoBanner grey />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with grey background', () => {
    const component = create(<InfoBanner grey />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
