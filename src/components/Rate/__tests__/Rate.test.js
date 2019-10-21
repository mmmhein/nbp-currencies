import React from 'react';
import { create } from 'react-test-renderer';

import Rate from '../Rate';

jest.mock('../../Text', () => 'Text');

describe('COMPONENT - Rate', () => {
  it('renders correctly', () => {
    const rate = {
      currency: 'euro',
      code: 'euro',
      mid: 4
    };
    const component = create(<Rate rate={rate} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
