import React from 'react';
import { create } from 'react-test-renderer';

import Main from '../Main';

describe('COMPONENT - Main', () => {
  it('renders correctly', () => {
    const component = create(<Main />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
