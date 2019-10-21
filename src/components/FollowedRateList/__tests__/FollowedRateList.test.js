import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import FollowedRateList from '../FollowedRateList';

afterEach(cleanup);

describe('COMPONENT - FollowedRateList', () => {
  describe('followed list is empty', () => {
    const props = {
      followedRates: [],
      removeFollowedRate: jest.fn()
    };
    it('renders correctly', () => {
      const { getByTestId } = render(<FollowedRateList {...props} />);

      expect(getByTestId('overlay')).toBeDefined();
    });
  });

  describe('followed list contains rates', () => {
    const removeFollowedRate = jest.fn();

    const followedRates = [
      {
        id: 0,
        currency: 'Euro',
        code: 'EURO',
        mid: 4.0
      }
    ];

    it('renders correctly', () => {
      const { getByTestId } = render(
        <FollowedRateList followedRates={followedRates} removeFollowedRate={removeFollowedRate} />
      );

      expect(getByTestId('rate')).toBeDefined();
    });

    it('fire remove rate handler', () => {
      const { container } = render(
        <FollowedRateList followedRates={followedRates} removeFollowedRate={removeFollowedRate} />
      );

      const button = container.querySelector('button');

      fireEvent.click(button);

      expect(removeFollowedRate).toHaveBeenCalledWith(followedRates[0].id);
    });
  });
});
