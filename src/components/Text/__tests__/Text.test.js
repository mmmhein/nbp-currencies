import React from 'react';
import { create } from 'react-test-renderer';

import Text from '../Text';

describe('COMPONENT - Text', () => {
  it('renders correctly', () => {
    const component = create(<Text />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly bold', () => {
    const component = create(<Text />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
