import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import RateList from '../RateList';

afterEach(cleanup);

describe('COMPONENT - RateList', () => {
  const initialProps = {
    rates: [],
    pending: true,
    addFollowedRate: jest.fn(),
    fetchRates: jest.fn()
  };

  describe('rate list empty', () => {
    it('renders correctly', () => {
      const { getByTestId } = render(<RateList {...initialProps} />);

      expect(getByTestId('overlay')).toBeDefined();
    });
  });

  describe('rate list contains rates', () => {
    it('render correctly and fire add rate handler', () => {
      const props = {
        ...initialProps,
        pending: false,
        rates: [
          {
            id: 0,
            currency: 'euro',
            code: 'EURO',
            mid: 4
          }
        ]
      };

      const { container } = render(<RateList {...props} />);

      const button = container.querySelector('button');

      fireEvent.click(button);

      const { addFollowedRate, rates } = props;

      expect(addFollowedRate).toHaveBeenCalledWith(rates[0]);
    });
  });
});
