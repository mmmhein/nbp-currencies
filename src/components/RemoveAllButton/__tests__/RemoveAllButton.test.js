import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import RemoveAllButton from '../RemoveAllButton';

afterEach(cleanup);

describe('COMPONENT - RemoveAllButton', () => {
  it('renders correctly', () => {
    const component = render(<RemoveAllButton removeAllFollowedRates={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });

  it('renders correctly with grey background', () => {
    const component = render(<RemoveAllButton grey removeAllFollowedRates={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });

  it('fire remove rates handler', () => {
    const removeAllFollowedRates = jest.fn();

    const { container } = render(<RemoveAllButton grey removeAllFollowedRates={removeAllFollowedRates} />);

    const button = container.querySelector('button');

    fireEvent.click(button);

    expect(removeAllFollowedRates).toHaveBeenCalled();
  });
});
